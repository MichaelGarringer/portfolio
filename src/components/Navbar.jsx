import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
import "../images/Michael-Garringer.pdf"


function Navbar() {

  return (
    <>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <Link to="/" className="navbar-brand">Mike Garringer</Link>
  <ul class="navbar-nav justify-content-end">
    <li class="nav-item">
    <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
    </li>
    <li class="nav-item">
    <Link to="/resume" className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}>Resume</Link>
    </li>
  </ul>
</nav>

    </>

  )

}

export default Navbar 