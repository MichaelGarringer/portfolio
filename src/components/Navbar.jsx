import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
import "../images/Michael-Garringer.pdf"


function Navbar() {

  return (
    <>

<nav class="navbar navbar-expand-lg navbar-light">
  <Link to="/" className="navbar-brand"><h2>Mike Garringer</h2></Link>
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <Link to="/resume" className="resume>"><h5>Resume</h5></Link>
    </li>
  </ul>
  
</nav>

    </>

  )

}

export default Navbar 