import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from "./components/Home";
import WebDesignDev from "./components/WebDes&DevProjects";
import VisualArt from "./components/VisualArtProjects";
import DigitalArt from "./components/DigArtNGraphDesProjects";
import CV from "./components/Cv";
import Menu from "./components/Menu";



function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/portfolio/" element={<Home/>} />
        <Route path="/portfolio/webdesign&development" element={<WebDesignDev/>} />
        <Route path="/portfolio/digitalart" element={<DigitalArt/>} />
        <Route path="/portfolio/visualart" element={<VisualArt/>} />
        <Route path="/portfolio/cv" element={<CV/>} />
    
      </Routes>
    </Router>
  );
}


export default App;


