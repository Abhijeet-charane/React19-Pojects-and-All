import { useState } from "react";
import "../index.css";

export const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
   e.preventDefault();
   const contactData = {
    username,
    email,
    message
   }
   console.log(contactData);
   
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Contact Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Message</label>
          <textarea
            type="password"
            name="message"
            required
            autoComplete="off"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
