import React from 'react';
import './Navbar.css';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <div className="logo">
       <Link to="/"> <h1>Be<span>Code</span></h1></Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/ABOUT">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/COURSES" >COURSES</NavLink>
          </li>
          <li>
            <NavLink to="/CONTACT" >CONTACT</NavLink>
          </li>
        </ul>

        <div className="loginsignups">
          <Link to="/Login"><button className='login-btn btn'>Login</button></Link>
          <Link to="/Signup"><button className='signup-btn btn'>Sign Up</button></Link>
        </div>

        <div className="contact">
          <div className="contact-icon">
            <ContactPhoneIcon />
          </div>
          <p>+233599316218</p>
        </div>
      </nav>

     
        <div className='btns menu-btn'><MenuIcon/></div>
       
   
    </div>

    <div className='sideNave'>


      <div className="logo">
       <Link to="/"> <h1>Be<span>Code</span></h1></Link>
       <div className='btns close-btn'><ClearIcon/></div>
   
      </div>
      <nav>
        <ul>
        
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/ABOUT">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/COURSES" >COURSES</NavLink>
          </li>
          <li>
            <NavLink to="/CONTACT" >CONTACT</NavLink>
          </li>
        </ul>

        <div className="loginsignup">
          <Link to="/Login"><button className='login-btn btn'>Login</button></Link>
          <Link to="/Signup"><button className='signup-btn btn'>Sign Up</button></Link>
        </div>

   
      </nav>

     
       
   
    </div>

    </>
  );
};

export default Navbar;
