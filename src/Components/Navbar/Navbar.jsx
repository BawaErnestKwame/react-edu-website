import React from 'react';
import './Navbar.css';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>Be<span>Code</span></h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>HOME</NavLink>
          </li>
          <li>
            <NavLink to="/ABOUT" activeClassName="active">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/COURSES" activeClassName="active">COURSES</NavLink>
          </li>
          <li>
            <NavLink to="/CONTACT" activeClassName="active">CONTACT</NavLink>
          </li>
        </ul>

        <div className="loginsignup">
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
    </div>
  );
};

export default Navbar;
