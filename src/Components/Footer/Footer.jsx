import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import './Footer.css'
import { Link } from 'react-router-dom'
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <div> 
      <div className="foooter-container">
    <div className="footer-text">
        <div className="flex1">
            <div className="logo-footer">
                <h1>Be<span>Code</span></h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit.
                 Est nulla provident, eum nihil soluta </p>

                 <div className="location">
                   <LocationOnIcon/>
                    <p>Ghana, SUNYANI BRONO</p>
                 </div>
        </div>

        <div className="flex2">
            <h2>Navigation</h2>
            <div className="links">
         <Link to='/Home'><li>Home</li></Link>
         <Link to='/About'><li>About</li></Link>
         <Link to='/Courses'><li>Courses</li></Link>
         <Link to='/CONTACT'><li>Contact</li></Link>
        </div>
            <div className="call">
            <CallIcon/>
           <p>+233599316218</p>
           </div>
        </div>

            <div className="flex3">
                <h2>Quick Links</h2>
                <div className="links">
                <a href="/course.html">Find Courses</a>
                <a href="./course.html">Get Started now!</a>
                <a href="./course.html"></a>
                <a href="./course.html">Descover More</a>
            </div>
                <div className="mail">
                   < AttachEmailIcon/>
                  <p>bawaernest926@gmail.com</p>
                </div>
            
               
            </div>

            <div className="flex4">
                <h2>Our Social Medial Handle</h2>
                <div className="footer-socials">
                  <Link><FacebookIcon/></Link>
     
                  <Link>   <InstagramIcon/></Link>
                    <Link><XIcon/></Link>
                  <Link> < WhatsAppIcon /></Link>
                  <Link> < TelegramIcon /></Link>
                 
                 </div>
                 <div className="flex5">
               <Link to='/Home'><KeyboardDoubleArrowUpIcon/></Link>
                
                 </div>

            </div>


            


        
    </div>
    
</div>

<hr />
<div className="copyright">
    <p>Copyright 2024<CopyrightIcon/>, All Right Reserved</p>
</div>

        
    </div>
  )
}

export default Footer