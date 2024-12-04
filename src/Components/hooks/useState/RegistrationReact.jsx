import React, { useState } from "react";
import "../Index.css";


export const RegistrationFormReact = () => {
  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    phone:""
  });
  

  const handleInputChange = (e) => {

    const {name, value} = e.target;

     setUser((prev) => ({...prev, [name]: value}))
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  console.log(user);
  };

  return (
    
    <div className="registration-container">
      <form onSubmit={handleFormSubmit} className="registration-form">
        <h2>Register</h2>
        <p>Please fill in this form to create an account.</p>

        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            required
            value={user.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            required
            value={user.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            value={user.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={user.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            required
            value={user.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <p className="terms">
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p>

        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
};
