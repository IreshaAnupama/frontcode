//  path:"/addParcel",
import React from 'react'
import AddParcelComponent from '../components/customer/AddParcelComponent'
import TopNav from '../components/TopNav'

const AddParcel = () => {
  return (
    <div>
        <div>
            <TopNav></TopNav>
         </div>
         <div>
            <AddParcelComponent/>
         </div>
    </div>
  )
}

export default AddParcel