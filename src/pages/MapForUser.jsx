import React from 'react'
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import UserMap from '../components/UserMap';
import './Pages.css';


const MapForUser = () => {
  return (
    <><div><TopNav></TopNav></div>
        <div className="center" > <UserMap>
          </UserMap> </div>
      <div><Footer></Footer></div>
      </>
  )
}

export default MapForUser