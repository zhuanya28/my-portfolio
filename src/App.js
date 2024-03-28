import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from "./components/Home";
import WebDesignDev from "./components/WebDes&DevProjects";
import VisualArt from "./components/VisualArtProjects";
import DigitalArt from "./components/DigArtNGraphDesProjects";
import Cv from "./components/Cv";
import Menu from "./components/Menu";



function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/webdesign&development" element={<WebDesignDev/>} />
        <Route path="/digitalart" element={<DigitalArt/>} />
        <Route path="/visualart" element={<VisualArt/>} />
        <Route path="/cv" element={<Cv/>} />
    
      </Routes>
    </Router>
  );
}


export default App;


