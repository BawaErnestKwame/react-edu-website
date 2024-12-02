import React from 'react';
import signupImage from '../../assets/logo.jpg'; // Ensure the image path is correct

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
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Full Name" required />
            </div>

            {/* Email Input */}
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" required />
            </div>

            {/* Password Input */}
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" required />
            </div>

            {/* Confirm Password Input */}
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Confirm Password" required />
            </div>

            {/* Phone Number Input */}
            <div className="input-field">
              <i className="fa-solid fa-phone"></i>
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
              Already have an account? <a href="./login.html">Log In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
