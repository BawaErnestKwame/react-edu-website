import React from "react";
import { Link } from "react-router-dom"; // Assuming React Router is used
import "./Login.css";
import swapstar from "../../assets/Swapster.jpeg";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

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
            <h1>Hello, Welcome Back👉</h1>
            <form className="form-box" onSubmit={handleSubmit}>
              <div className="input-filed">
               <PersonIcon/>
                <input
                  type="text"
                  placeholder="Username or email"
                  aria-label="Username or email"
                  required
                   className="inputs"
                />
              </div>
              <div className="input-filed">
              <LockIcon/>
                <input
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  required
                   className="inputs"
                />
              </div> 

              <div className="input-filed">
              <LockIcon/>
                <input
                  type="password"
                  placeholder=" Confirm Password"
                  aria-label="Password"
                  required
                  className="inputs"
                />
              </div>

              <div className="radio_forgot-passwords">
                
                <div className="input-radio">
                    <input type="radio"  className="radio"/>
                </div>

                <p> Please Remember Me</p>


                
              </div>
              <button className="login-btns" type="submit">
                Login
              </button>
              <p className="dont-hv-account">
                Don’t have an account? <Link to="/signup">Click here!✔</Link>
              </p>
            </form>
          </div>
        </div>
     
    </div>
  );
};

export default Login;
