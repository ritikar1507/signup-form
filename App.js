// src/App.js

import React, { useState } from 'react';
import './App.css';  // Optional for styling, you can modify or remove it as needed

function SignupForm() {
  // State to hold form values and errors
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    passwordMatch: '',
    email: '',
    password: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate Email
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    }

    // Validate Password
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    // Validate Password Match
    if (formData.password !== formData.confirmPassword) {
      newErrors.passwordMatch = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle successful form submission
      alert('Signup Successful!');
      
      // Reset form data
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <div className="signup-form">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Create Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.passwordMatch && <p className="error">{errors.passwordMatch}</p>}
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <SignupForm />
    </div>
  );
}

export default App;

