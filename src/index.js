import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, 
  RouterProvider} from "react-router-dom";


import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Signing from './pages/Signing';
import UserMap from './pages/MapForUser';
import DriverProfile from'./pages/driverPages/DriverProfile';
import Imageexample from './pages/driverPages/Imageexample';
import OrderOfShedule from './pages/driverPages/OrderOfShedule';
import Eamplemap from './components/Eamplemap';
import ParcelList from './pages/userPages/ParcelList';
import UserProfile from './pages/userPages/UserProfile';
import AddParcel from './pages/AddParcel';
import PickUpFormComponent from './components/PickUpFormComponent';
import PickupConformComponent from './components/PickupConformComponent';

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>
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
      path:"/examplemap",
      element:<Eamplemap/>
    }
    ,
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
    }

  ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
