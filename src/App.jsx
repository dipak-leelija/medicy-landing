import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavbar from './componant/MainNavbar'
import Footer from './componant/Footer';

import Home from './views/Home';
import Pricing from './views/Pricing';
import AboutUs from './views/AboutUs';
import Contact from './views/Contact';
// import ChatWidget from './componant/ChatWidget';
import MeetSchedule from './views/MeetSchedule';
import PrivacyPolicy from './componant/PrivacyPolicy';
import RefundPolicy from './componant/RefundPolicy';
import TermsConditions from './componant/TermsConditions';


import "../public/assets/css/main-navbar.css";
import "../public/assets/css/home.css";
import "../public/assets/css/about.css";
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
// import '../public/assets/css/chatwidget.css'
import '../public/assets/css/pricing.css';
import '../public/assets/css/doctor.css';
import '../public/assets/css/privacy-policy.css';



function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/schedule' element={<MeetSchedule/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/refund-policy' element={<RefundPolicy />} />
        <Route path='/terms-conditions' element={<TermsConditions/>}/>
      </Routes>
      <Footer />
      {/* <ChatWidget/> */}
    </BrowserRouter>
    
  )
}

export default App
