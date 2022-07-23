import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App(){
  return(
    <BrowserRouter>
      <Navigation />
      <Routes>
        
        <Route path='/' exact={ true } element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movie-detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
