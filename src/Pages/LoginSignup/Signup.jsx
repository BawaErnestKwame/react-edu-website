import React from 'react';
import './Signup.css'
import signupImage from '../../assets/books.jpeg'; 
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className="main-container">
      <div className="signup-container">
        {/* Signup Image Section */}
        <div className="signup-image">
          <img src={signupImage} alt="Signup" />
        </div>

        {/* Signup Form Section */}
        <div className="signup-form-container">
          <h1>Join Us Now! 👉</h1>
          <form className="form-box">
            {/* Full Name Input */}
            <div className="input-field">
            <PersonIcon/>
              <input type="text" 
              placeholder="Full Name" 
              required 
              className='inputs'
              />
            </div>

            {/* Email Input */}
            <div className="input-field">
           <EmailIcon/>
              <input type="email" placeholder="Email"  className='inputs' required />
            </div>

            {/* Password Input */}
            <div className="input-field">
            <LockIcon/>
              <input type="password" placeholder="Password"  className='inputs' required />
            </div>

            {/* Confirm Password Input */}
            <div className="input-field">
              <LockIcon/>
              <input type="password" placeholder="Confirm Password"  className='inputs' required />
            </div>

            {/* Phone Number Input */}
            <div className="input-field">
             <LocalPhoneIcon />
              <input type="text" placeholder="Phone Number"  className='inputs' />
            </div>

            {/* Agree to Terms */}
            <div className="agree-terms">
             <div className="checkbox">
             <input type="checkbox" id="agree" />
             </div>
            <p>I agree to the Terms and Conditions</p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="signup-btns">Sign Up</button>

            {/* Already have an account */}
            <p className="already-hv-account">
              Already have an account? <Link to='/Login'>Login!</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
