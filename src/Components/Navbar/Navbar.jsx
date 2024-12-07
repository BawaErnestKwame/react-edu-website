import React, { useState } from 'react';
import './Navbar.css';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {
  const [menuBtn, setmenuBtn] = useState(false);

  const toggleMenu = () => {
    setmenuBtn(!menuBtn);
  };

  const closeMenu = () => {
    setmenuBtn(false);
  };

  return (
    <>
      <div className='navbar'>
        <div className="logo">
          <Link to="/"> <h1>Be<span>Code</span></h1></Link>
        </div>

        <div className='btns menu-btn' onClick={toggleMenu}>
          {menuBtn ? <ClearIcon /> : <MenuIcon />}
        </div>

        <nav>
          <ul className={menuBtn ? "open" : ""}>
            <li>
              <NavLink to="/" onClick={closeMenu}>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/ABOUT" onClick={closeMenu}>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/COURSES" onClick={closeMenu}>COURSES</NavLink>
            </li>
            <li>
              <NavLink to="/CONTACT" onClick={closeMenu}>CONTACT</NavLink>
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
      </div>
    </>
  );
};

export default Navbar;
