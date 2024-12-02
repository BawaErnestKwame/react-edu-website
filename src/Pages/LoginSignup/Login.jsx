import React from "react";
import { Link } from "react-router-dom"; // Assuming React Router is used
import "./Login.css";
import swapstar from "../../assets/Swapster.jpeg";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="login-container">
        <div className="containerss">
          <div className="image-cont">
            <img src={swapstar} alt="Welcome" />
          </div>

          <div className="login-form-container">
            <h1>Hello, Welcome Back</h1>
            <form className="form-box" onSubmit={handleSubmit}>
              <div className="input-filed">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="Username or email"
                  aria-label="Username or email"
                  required
                />
              </div>
              <div className="input-filed">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  required
                />
              </div>

              <div className="radio_forgot-password">
                <div>
                  <input type="radio" id="rememberMe" />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <Link to="/forgot-password">
                  <p>Forgot Password?</p> 
                </Link>
              </div>
              <button className="login-btns" type="submit">
                Login
              </button>
              <p>
                Don’t have an account? <Link to="/signup">Click here</Link>
              </p>
            </form>
          </div>
        </div>
     
    </div>
  );
};

export default Login;
