import React from 'react'
import './Contact.css'
import map from '../../assets/map.jpeg'

const Contact = () => {
  return (
    <div>
      <div class="container">
        <div class="text">
          <h1>CONTACT US/</h1>
        </div>
    </div>

    <div class="contact_us_getin_touch_right_left">
        <div class="left">
            <h2>Contact Us</h2>
            <div class="locations">
                <i class="fa-solid fa-location-dot"></i>
                SUNYANI Bono Region

            </div>

            <div class="emails">
                <i class="fa-solid fa-square-envelope"></i>
                bawaernest926@gmail.com

            </div>

            <div class="coallus">
                <i class="fa-solid fa-phone"></i>
                <p>+233599316218</p>
            </div>

            <div class="contactus2">
                <i class="fa-solid fa-address-book"></i>
                +233599316218
            </div>


            <i class="fa-solid fa-bars" id="menu-icon" onclick="showSidebar()"></i>
        </div>

        <div class="right">
            <div class="getintouch">
                <h2>Get In Touch With Us</h2>
                <h4>AND WE WILL GET BACK TO YOU LATER</h4>
            </div>

            <div class="form_container">
                <div class="full_name">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                </div>

                <div class="input_filed">
                    <input type="email" placeholder="Email" required/>
                </div>
                <div class="input_filed">
                    <input type="text" placeholder="Subject" required/>
                </div>

                <textarea name="text" id="message">Message</textarea>
             



            </div>

            <button className='submit'>SUBMIT</button>

        </div>
    </div>

    <div class="mapps_toshow">
        <img src={map} alt=""/>
    </div>
    </div>
  )
}

export default Contact