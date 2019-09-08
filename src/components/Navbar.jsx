import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
import "../images/Michael-Garringer.pdf"


function Navbar(){
    
      return(
        <>
        <nav class="navbar navbar-dark bg-dark">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
      <h2>Michael Garringer</h2>
            </Link>
       <div className="links">
       <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
      <p>Portfolio</p>
      </Link>
            <Link to="/resume" className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
      <p>Resume</p>
            </Link>
     </div>
      </nav>
    
       </>
  
  )

}

export default Navbar 