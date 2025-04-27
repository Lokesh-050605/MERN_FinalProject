import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/bg.jpg";

const SignUp = () => {
  // State for form fields
  const [name, setName] = useState(() => localStorage.getItem("name") || "");
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  // State for validation
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cityError, setCityError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Loading state for location detection
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);

  const validateName = (value) => {
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (!value.trim()) {
      setNameError("Name is required");
      return false;
    } else if (!nameRegex.test(value)) {
      setNameError("Name must be at least 3 characters and contain only letters");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

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

  const validateCity = (value) => {
    if (!value.trim()) {
      setCityError("City is required");
      return false;
    } else {
      setCityError("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isCityValid = validateCity(city);

    if (isNameValid && isEmailValid && isPasswordValid && isCityValid) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("city", city);

      setFormSubmitted(true);

      // Show success message
      setTimeout(() => {
        alert("Registration successful!");
        
      }, 500);
      
    }
  };

  const handleDetectLocation = () => {
    setIsDetectingLocation(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
            if (data.address && data.address.city) {
              setCity(data.address.city);
              setCityError("");
            } else {
              setCityError("Unable to detect city");
            }
          } catch (error) {
            setCityError("Location fetch failed");
          }
          setIsDetectingLocation(false);
        },
        (error) => {
          setCityError("Location permission denied");
          setIsDetectingLocation(false);
        }
      );
    } else {
      setCityError("Geolocation not supported");
      setIsDetectingLocation(false);
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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
          {formSubmitted && (
            <div className="mt-2 p-2 bg-green-100 text-green-700 rounded text-center">
            Registration successful! 
            <Link to="/sign-in" className="underline text-green-700">
              Sign in
            </Link>
          </div>
          )}
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (formSubmitted) validateName(e.target.value);
                }}
                onBlur={(e) => validateName(e.target.value)}
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  nameError ? "border-red-300" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Your full name"
              />
              {nameError && (
                <p className="mt-1 text-sm text-red-600" id="name-error">
                  {nameError}
                </p>
              )}
            </div>

            {/* Email Address */}
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

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
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

            {/* City Input with Location Detection */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <div className="flex">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    if (formSubmitted) validateCity(e.target.value);
                  }}
                  onBlur={(e) => validateCity(e.target.value)}
                  className={`appearance-none relative block w-full px-3 py-2 border ${
                    cityError ? "border-red-300" : "border-gray-300"
                  } placeholder-gray-500 text-gray-900 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  placeholder="Your city"
                />
                <button
                  type="button"
                  onClick={handleDetectLocation}
                  className="px-3 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 text-sm"
                  disabled={isDetectingLocation}
                >
                  {isDetectingLocation ? "Detecting..." : "Detect"}
                </button>
              </div>
              {cityError && (
                <p className="mt-1 text-sm text-red-600" id="city-error">
                  {cityError}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
