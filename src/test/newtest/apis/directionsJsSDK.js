import { RouteData } from "../dataModel/routeData";
let directionsService;

async function calcRoute(origin, destination, waypoints, travelMode, options) {
  if (!directionsService) {
    directionsService = new window.google.maps.DirectionsService();
  }

  const timeBefore = Date.now();
  let request = {
    origin: origin,
    destination: destination,
    travelMode: travelMode,
    avoidTolls: options.avoidTolls,
    avoidHighways: options.avoidHighways,
    optimizeWaypoints: !!options.optimizeWaypoints,
    waypoints: waypoints.map((wp) => {
      return {
        stopover: true,
        location: wp,
      };
    }),
  };
  let result;
  try {
    result = await directionsService.route(request);
  } catch (err) {
    console.log("gots error", err);
    if (err.code === "ZERO_RESULTS") {
      // ignore
      return;
    } else {
      throw err;
    }
  }
  const timeAfter = Date.now();
  return RouteData.create(result, timeAfter - timeBefore);
}

async function computeRoutesDirectionsJsSDK(pairs, travelMode, options = {}) {
  let pair;
  let paths = [];
  while ((pair = pairs.shift())) {
    try {
      const result = await calcRoute(
        pair.origin,
        pair.destination,
        pair.waypoints,
        travelMode,
        options
      );
      await new Promise((r) => setTimeout(r, 400));
      if (result) {
        // sometimes there aren't routes
        paths.push(result);
      }
    } catch (err) {
      alert(`${err.name}: ${err.message}`);
      return paths;
    }
  }
  return paths;
}

export { computeRoutesDirectionsJsSDK };