import React from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from  './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Cources from './Pages/Cources/Cources';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
  <>
  <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/ABOUT' element={<About/>} />
  <Route path='/COURSES' element={<Cources/>} />
  <Route path='/CONTACT' element={<Contact/>} />

 </Routes>
 <Footer/>
  </>
  )
}

export default App