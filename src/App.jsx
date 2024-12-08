import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cources from './Pages/Cources/Cources';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';
import Login from './Pages/LoginSignup/Login'; 
import Signup from './Pages/LoginSignup/Signup'; 

import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation()
  return (
    <>
      <Navbar />

      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/ABOUT" element={<About />} />
        <Route path="/COURSES" element={<Cources />} />
        <Route path="/CONTACT" element={<Contact />} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Signup" element={<Signup />} /> 
      </Routes>
      <Footer />
      </AnimatePresence>
    </>
  );
};

export default App;
