import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return(
<>
  <Navbar />
  
  <Footer />
</>

  )
}

export default App;
