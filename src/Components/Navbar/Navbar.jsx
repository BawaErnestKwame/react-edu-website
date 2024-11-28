import React from 'react'
import './Navbar.css'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import {Link, NavLink} from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>Be<span>Code</span></h1>
      </div>
    <nav>
      <ul>
     
       <NavLink to='/'> <li>HOME</li></NavLink>
       <NavLink to='./ABOUT'> <li>ABOUT</li></NavLink>
      <NavLink to='./COURSE'>  <li>COURSES</li></NavLink>
    <NavLink to='./CONTACT'>    <li>CONTACT</li></NavLink>
      </ul>

      <div className="loginsignup">
      <button className='login-btn btn'>Login</button>
      <button className='signup-btn btn'>Sign Up</button>
    </div>

    <div className="contact">
      <div className="contact-icon">
      <ContactPhoneIcon />

      </div>

      <p>+233599316218</p>
    </div>
  
    </nav>

    
  
  </div>
  )
}

export default Navbar