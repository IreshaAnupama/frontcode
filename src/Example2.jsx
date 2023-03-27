import React from 'react'
import * as tt from '@tomtom-international/web-sdk-maps'
import { useRef, useEffect, useState } from 'react'
import './App.css'

const Example2 = () => {
    const mapElement = useRef()
    const [map, setMap] = useState({})
    useEffect(() => {
       
        let map = tt.map({
          key: '0A0PngjC8ta5FykAtfGdgvGIWIqj9muf',
          container: mapElement.current,
          
        })
        setMap(map)
    },[])
  return (
    <div className="App"><div ref={mapElement}></div></div>
  )
}

export default Example2