import React from "react";
import { getAllStartships } from "../../services/api-calls";
import { useLocation } from 'react-router-dom'


function StartshipPage(props) {
  const location = useLocation()
  const { name , model } = location.state
    return (

     
      <div>
        {/* {StartshipDetails.name ? */}
        <>
          <h2>NAME: {name}</h2>
          <h2>MODEL: {model}</h2>
          <h2>RETURN</h2>
          
        </>
   
        {/* } */}
      </div>
  )  
}

export default StartshipPage;