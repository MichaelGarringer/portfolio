import React, { Component } from 'react';
import './App.css';
import './pages/portfolio.css'
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Index from './pages/index';
import Portfolio from "./pages/portfolio"
import Resume from "./pages/resume"


function App() {
 
 
    return(
      <>
      <Router>
      <Navbar />

      <Switch>
      <Route exact path ="/" component={Index} />
   
      <Route exact path ="/resume" component={Resume} />
      </Switch>
      <br/>
      <Footer />
      </Router>
      </>
    )
  }


export default App;
