import React from "react";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";


function StartshipPage(props) {
  const location = useLocation()
  const { name , model } = location.state
    return (
      <section id="starshipDiv">
          <h2>NAME: {name}</h2>
          <h2>MODEL: {model}</h2>
          <Link className='returnBtn' to={{ pathname: `/`}} >
                <div>
                <h2>RETURN</h2>
                </div>
          </Link>
      </section>
  )  
}

export default StartshipPage;