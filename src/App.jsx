import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavbar from './componant/MainNavbar'
import ChooseUs from './views/Chooseus';
import KeyFeature from './views/KeyFeature';
import TrailBooking from './views/TrailBooking';
import PharmaciesIcon from './views/PharmaciesIcon';
import Faqs from './views/Faqs';
import Cataloguebanner from './views/Cataloguebanner';
import Testimonial from './views/Testimonial';
import Features from './views/Features';
import Contact from './views/Contact';
import Footer from './componant/Footer';

import AboutUs from './views/AboutUs';
import Home from './views/Home';
import "../public/assets/css/main-navbar.css";
import "../public/assets/css/home.css";
import "../public/assets/css/chooseus.css";
import "../public/assets/css/keyfeatures.css";
import "../public/assets/css/footer.css";
import "../public/assets/css/trailbooking.css";
import "../public/assets/css/pharmaciesicon.css";
import '../public/assets/css/faqs.css';
import '../public/assets/css/catalougebanner.css';
import '../public/assets/css/testimonial.css';
import '../public/assets/css/features.css';
import '../public/assets/css/contact.css';



function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/top-pharmacies' element={<PharmaciesIcon/>}/>
        <Route path='/choose' element={<ChooseUs />} />
        <Route path='/features' element={<KeyFeature />} />
        <Route path='/Trail-boking' element={<TrailBooking />}/>
        <Route path='/about' element={<AboutUs />} />
        <Route path='/Faqs' element={<Faqs/>}/>
        <Route path='/catalouge' element={<Cataloguebanner/>}/>
        <Route path='/usefull-features' element={<Features/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Testimonial' element={<Testimonial/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
