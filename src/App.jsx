import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './componant/Header'
import Footer from './componant/Footer';
import Layout from './componant/Layout/Layout';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
