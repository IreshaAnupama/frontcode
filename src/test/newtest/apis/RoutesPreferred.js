import axios from "axios";
import { RouteData } from "../dataModel/routeData";
const apiKey = "AIzaSyDwtBza38O5StjIz7dPbWDcX8BK-JSD2z0";

async function calcRoute(
  origin,
  destination,
  waypoints,
  travelMode,
  routingPreference,
  options
) {
  const timeBefore = Date.now();
  let config = {
    method: "post",
    url: "https://routespreferred.googleapis.com/v1:computeRoutes",
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline,routes.legs.end_location",
    },
    data: {
      intermediates: waypoints.map((wp) => {
        return {
          vehicleStopover: true,
          location: {
            latLng: {
              latitude: wp.lat,
              longitude: wp.lng,
            },
          },
        };
      }),
      origin: {
        location: {
          latLng: {
            latitude: origin.lat,
            longitude: origin.lng,
          },
        },
      },
      destination: {
        location: {
          latLng: {
            latitude: destination.lat,
            longitude: destination.lng,
          },
        },
      },
      travelMode: travelMode,
      routingPreference: routingPreference,
      polylineQuality: "OVERVIEW",
      computeAlternativeRoutes: false,
      routeModifiers: {
        avoidTolls: options.avoidTolls,
        avoidHighways: options.avoidHighways,
        avoidFerries: false,
      },
      languageCode: "en-US",
      units: "IMPERIAL",
    },
  };

  const result = await axios(config);
  console.log(result);
  const timeAfter = Date.now();
  if (result.data.routes) {
    // sometimes no route returned
    return RouteData.createFromRoutesPreferred(result, timeAfter - timeBefore);
  }
}

//Intentionally generates routes serially ... to avoid high QPS issues
async function computeRoutesPreferred(
  pairs,
  travelMode,
  routingPreference,
  options = {}
) {
  let pair;
  let paths = [];
  while ((pair = pairs.shift())) {
    try {
      const result = await calcRoute(
        pair.origin,
        pair.destination,
        pair.waypoints,
        travelMode,
        routingPreference,
        options
      );
      if (result) {
        // sometimes there aren't routes
        paths.push(result);
      }
    } catch (err) {
      alert(`Server error: ${err.message}`);
      return paths;
    }
  }
  return paths;
}

export { computeRoutesPreferred };



function RoutesPreferred() {
  computeRoutesPreferred();
  return (
    <div>routesPreferred</div>
  )
}

export default RoutesPreferred