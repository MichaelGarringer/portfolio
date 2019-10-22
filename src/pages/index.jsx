import React from "react"
import './portfolio.css'
import Jumbotron from "../components/Jumbotron/Jumbotron"
import Portfolio from "../pages/portfolio"
import "../components/Jumbotron/jumbotron.css"



function Index(){
    return(
        <>
      <Jumbotron />
        <h1>Projects</h1>
        <Portfolio />
        
        <br/>
        </>
    )

}

export default Index