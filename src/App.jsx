import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavbar from './componant/MainNavbar'
import Footer from './componant/Footer';

import AboutUs from './views/AboutUs';
import Home from './views/Home';



import "../public/assets/css/main-navbar.css";



function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
