import React, { useState } from "react";
import "./Index.css";

export const RegistrationForm = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {

    const {name, value} = e.target;

    switch(name) {
      case "firstName": 
      setFirstname(value);
      break;

      case "lastName":
        setLastName(value);
        break;

        case "email":
          setEmail(value);
          break;

          case "password":
            setPassword(value);
            break;

          case "phone":
          setPhoneNumber(value);
          break; 
        }


}

const handleFormSubmit = (event) => {
  event.preventDefault();
  const formData = {
    firstName,
    lastName,
    email,
    password,
    phoneNumber
  };
  console.log(formData);
  


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
            value={firstName}
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
            value={lastName}
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
            value={email}
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
            value={password}
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
            value={phoneNumber}
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
