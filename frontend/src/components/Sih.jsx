import React, { useState } from "react";
import "../components/pages/style.css"; // Assuming your CSS is stored in styles.css

function LoginSignup() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="container1">
      <input type="checkbox" id="flip" checked={isFlipped} onChange={handleFlip} />
      <div className={`cover ${isFlipped ? "flipped" : ""}`}>
        <div className="front">
        <img 
  src="https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?cs=srgb&dl=pexels-mccutcheon-1148399.jpg&fm=jpg" 
  alt="Front" 
  style={{ width: "300px", height: "400px" }}
/>

          <div className="text">
            <span className="text-1">Welcome Back!</span>
            <span className="text-2">Please login to continue</span>
          </div>
        </div>
        <div className="back">
          <img src="back-image.jpg" alt="Back" />
          <div className="text">
            <span className="text-1">Join Us!</span>
            <span className="text-2">Create your account</span>
          </div>
        </div>
      </div>

      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <div className="text">
                <a href="#">Forgot password?</a>
              </div>
              <div className="button">
                <input type="submit" value="Login" />
              </div>
              <div className="login-text">
                <span>
                  Don't have an account?{" "}
                  <label htmlFor="flip" onClick={handleFlip}>
                    Signup now
                  </label>
                </span>
              </div>
            </div>
          </div>

          <div className="signup-form">
            <div className="title">Sign Up</div>
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <div className="button">
                <input type="submit" value="Sign Up" />
              </div>
              <div className="sign-up-text">
                <span>
                  Already have an account?{" "}
                  <label htmlFor="flip" onClick={handleFlip}>
                    Login now
                  </label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
