import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './Footer.css';

const AppFooter = () => {
  return (
    <>
      <div className="foooter-container">
        <div className="footer-text">
          <div className="flex1">
            <div className="logo-footer">
              <h1>Be<span>Code</span></h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nulla provident, eum nihil soluta.</p>
            <div className="location">
              <LocationOnIcon />
              <p>Ghana, SUNYANI BRONO</p>
            </div>
            <div className="call">
              <CallIcon />
              <p>+233599316218</p>
            </div>
            <div className="mail">
              <AttachEmailIcon />
              <p>bawaernest926@gmail.com</p>
            </div>
          </div>

          <div className="flex2">
            <h2>Navigation</h2>
            <div className="links">
              <a href="./index.html">Home</a>
              <a href="./about.html">About</a>
              <a href="./course.html">Courses</a>
              <a href="./contact.html">Contact</a>
            </div>
           
          </div>

          <div className="flex3">
            <h2>Quick Links</h2>
            <div className="links">
              <a href="/course.html">Find Courses</a>
              <a href="./course.html">Get Started now!</a>
              <a href="./course.html">Discover More</a>
            </div>
       
          </div>

          <div className="flex4">
            <h2>Our Social Media Handles</h2>
            <div className="footer-socials">
              <a href="#"><FacebookIcon /></a>
              <a href="#"><WhatsAppIcon /></a>
              <a href="#"><InstagramIcon /></a>
              <a href="#"><TwitterIcon /></a>
              <a href="#"><TelegramIcon /></a>
            </div>
            <div className="flex5">
              <a href="#" className="home"><KeyboardDoubleArrowUpIcon /></a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>Copyright 2024 <CopyrightIcon />, All Rights Reserved</p>
      </div>
    </>
  );
};

export default AppFooter;
