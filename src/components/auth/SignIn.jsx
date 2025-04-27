import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/bg.jpg"; 

const SignIn = () => {
  // State for form fields
  const [email, setEmail] = useState(() => localStorage.getItem("savedEmail") || "");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(() => localStorage.getItem("rememberMe") === "true");
  
  // State for validation
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Load saved data on component mount
  useEffect(() => {
    if (localStorage.getItem("rememberMe") === "true") {
      setEmail(localStorage.getItem("savedEmail") || "");
      // For security, we don't load the password from localStorage
    }
  }, []);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) {
      setEmailError("Email is required");
      return false;
    } else if (!emailRegex.test(value)) {
      setEmailError("Invalid email format");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!value.trim()) {
      setPasswordError("Password is required");
      return false;
    } else if (!passwordRegex.test(value)) {
      setPasswordError("Password must contain at least 8 characters, including uppercase, lowercase, number & special character");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
  
    if (isEmailValid && isPasswordValid) {
      // Save details if remember me is checked
      if (rememberMe) {
        localStorage.setItem("savedEmail", email);
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("savedEmail");
        localStorage.removeItem("rememberMe");
      }
      
      // Save last login information
      const loginInfo = {
        email,
        lastLogin: new Date().toLocaleString(),
      };
      
      localStorage.setItem("lastLoginInfo", JSON.stringify(loginInfo));
  
      // Set isLogin to true
      localStorage.setItem("isLogin", "true");
  
      setFormSubmitted(true);
      
      // Show success message and reset form
      setTimeout(() => {
        window.location.href = "/"; // Redirect to home page or desired page
      }, 500);
    }
  };
  
  return (
    <div
      className="min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-md w-full space-y-8 p-8 rounded-xl shadow-2xl" style={{
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          {formSubmitted && (
            <div className="mt-2 p-2 bg-green-100 text-green-700 rounded text-center">
              Sign in successful!
            </div>
          )}
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (formSubmitted) validateEmail(e.target.value);
                }}
                onBlur={(e) => validateEmail(e.target.value)}
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  emailError ? "border-red-300" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-600" id="email-error">
                  {emailError}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (formSubmitted) validatePassword(e.target.value);
                }}
                onBlur={(e) => validatePassword(e.target.value)}
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  passwordError ? "border-red-300" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
              />
              {passwordError && (
                <p className="mt-1 text-sm text-red-600" id="password-error">
                  {passwordError}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
          
          <div className="text-center mt-4">
            <Link to="/sign-up" className="font-medium text-indigo-600 hover:text-indigo-500">
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
        
        
      </div>
    </div>
  );
};

export default SignIn;