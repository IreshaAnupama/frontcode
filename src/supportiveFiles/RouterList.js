import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signing from '../pages/Signing';
import UserMap from '../pages/MapForUser';
import DriverProfile from'../pages/driverPages/DriverProfile';
import Imageexample from '../pages/driverPages/Imageexample';
import OrderOfShedule from '../pages/driverPages/OrderOfShedule';

import ParcelList from '../pages/userPages/ParcelList';
import UserProfile from '../pages/userPages/UserProfile';
import AddParcel from '../pages/AddParcel';
import PickUpFormComponent from '../components/customer/PickUpFormComponent';
import PickupConformComponent from '../components/customer/PickupConformComponent';
import VehicleAssign from '../pages/staf/VehicleAssign';

import {createBrowserRouter} from "react-router-dom";
import DriverListOfParcel from '../pages/driverPages/DriverListOfParcel';

import DriverSign from '../pages/driverPages/DriverSign';
import UserSign from '../pages/userPages/UserSign';
import UserSendParcel from '../pages/userPages/UserSendParcel';
import TestMap from '../pages/staf/TestMap';
import AppCopy from '../test/AppCopy';
import WayPoint from '../test/WayPoint';
import MyLocation from '../test/MyLocation';
import CopyApp from '../test/newtest/CopyApp';
import Map from '../test/newtest/Map';
import computeRoutesPreferred from '../test/newtest/apis/RoutesPreferred';
import RoutesPreferred from '../test/newtest/apis/RoutesPreferred';
import GraphComponent from '../test/GraphComponent';
import MarkersMap from '../test/MarkersMap'

  export const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"markersMap",
      element:<MarkersMap/>
    },
    {
      path:"graphcomponent",
      element:<GraphComponent/>
    },
    {
      path:"/wayPoint",
      element: <WayPoint/>
    },
    {
      path:"/routesPreferred",
      element: <RoutesPreferred/>
    },
    {
      path:"/map",
      element: <Map/>
    },
    {
      path:"/copyApp",
      element: <CopyApp/>
    },
    {
      path:"/myLocation",
      element: <MyLocation/>
    },
    {
      path:"/appCopy",
      element: <AppCopy/>
    },

    {
      path:"/testMap",
      element:<TestMap/>
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signing",
      element:<Signing/>
    },
    {
      path:"/userMap",
      element:<UserMap/>
    },
    {
      path:"/driverProfile",
      element:<DriverProfile/>
    },
    {
      path:"/imageexample",
      element:<Imageexample/>
    },
    {
      path:"/orderofshedule",
      element:<OrderOfShedule/>
    },

    {
      path:"/parcelList",
      element:<ParcelList/>
    },
    {
      path:"/userProfile",
      element:<UserProfile/>
    },
    {
      path:"/addParcel",
      element:<AddParcel/>
    },
    {
      path:"/pickUpFormComponent",
      element:<PickUpFormComponent/>
    },
    {
      path:"/pickupConformComponent",
      element:<PickupConformComponent/>
    },
    {
      path:"/vehicleAssign",
      element:<VehicleAssign/>
    },
    
    {
        path:"/driverListOfParcel",
        element:<DriverListOfParcel/>
      },

      {
        path:"/driverSign",
        element:<DriverSign/>
      },
      {
        path:"/userSign",
        element:<UserSign/>
      },
      {
        path:"/userSendParcel",
        element:<UserSendParcel/>

      },
          


  ])