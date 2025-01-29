import React, { useState } from 'react';
import './Navbar.css';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <h1>Be<span>Code</span></h1>
        </Link>
      </div>

      <nav>
        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <li><NavLink to='/' onClick={() => setMenuOpen(false)}>HOME</NavLink></li>
          <li><NavLink to='/about' onClick={() => setMenuOpen(false)}>ABOUT</NavLink></li>
          <li><NavLink to='/courses' onClick={() => setMenuOpen(false)}>COURSES</NavLink></li>
          <li><NavLink to='/contact' onClick={() => setMenuOpen(false)}>CONTACT</NavLink></li>
          <div className='auth-buttons'>
            <Link to='/login'><button className='login-btn'>Login</button></Link>
            <Link to='/signup'><button className='signup-btn'>Sign Up</button></Link>
          </div>
        </ul>
      </nav>

      <div className='menu-icon' onClick={toggleMenu}>
        {menuOpen ? <ClearIcon /> : <MenuIcon />}
      </div>
    </header>
  );
};

export default Navbar;