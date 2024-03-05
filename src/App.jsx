import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavbar from './componant/MainNavbar'
import ChooseUs from './views/Chooseus';
import Keyfeatures from './views/Keyfeatures';
import Footer from './componant/Footer';

import AboutUs from './views/AboutUs';
import Home from './views/Home';
import "../public/assets/css/main-navbar.css";
import "../public/assets/css/home.css";
import "../public/assets/css/chooseus.css";
import "../public/assets/css/keyfeatures.css";
import "../public/assets/css/footer.css";



function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/choose' element={<ChooseUs />} />
        <Route path='/features' element={<Keyfeatures />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
