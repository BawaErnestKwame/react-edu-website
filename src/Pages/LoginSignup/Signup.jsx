import React from 'react';
import './Signup.css'
import signupImage from '../../assets/logo.jpg'; // Ensure the image path is correct
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

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
              <input type="text" placeholder="Full Name" required />
            </div>

            {/* Email Input */}
            <div className="input-field">
           <EmailIcon/>
              <input type="email" placeholder="Email" required />
            </div>

            {/* Password Input */}
            <div className="input-field">
            <LockIcon/>
              <input type="password" placeholder="Password" required />
            </div>

            {/* Confirm Password Input */}
            <div className="input-field">
              <LockIcon/>
              <input type="password" placeholder="Confirm Password" required />
            </div>

            {/* Phone Number Input */}
            <div className="input-field">
             <LocalPhoneIcon />
              <input type="text" placeholder="Phone Number" />
            </div>

            {/* Agree to Terms */}
            <div className="agree-terms">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">I agree to the Terms and Conditions</label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="signup-btns">Sign Up</button>

            {/* Already have an account */}
            <p className="already-hv-account">
              Already have an account? <a href="./Login">Log In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
