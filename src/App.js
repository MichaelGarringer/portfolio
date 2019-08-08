import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card"
import Jumbotron from "./components/Jumbotron/Jumbotron.js"
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer.jsx'
import works from "../src/works.json"



function App() {
 
  
    return(
      <>
      <Navbar />
      <Jumbotron />


    

      <Footer />
      </>
    )
  }


export default App;
