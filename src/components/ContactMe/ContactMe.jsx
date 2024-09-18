import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function ContactMe() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
    current_org: "",
  });

  const [loading, setLoading] = useState(false); // For button loading state
  const [message, setMessage] = useState(null); // For success/error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setMessage(null); // Clear previous messages

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (res) => {
          setLoading(false); // Stop loading
          setMessage("Success! Your message has been sent.");
        },
        (error) => {
          setLoading(false); // Stop loading
          setMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-heading-section">
        <h1 className="contact-heading">Contact</h1>
        <h3 className="contact-heading-description">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </h3>
      </div>
      <div className="contact-form-section">
        <form className="contact-form" ref={form} onSubmit={handleSendEmail}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="currentOrg">Current Organization</label>
            <input
              type="text"
              id="current_org"
              name="current_org"
              value={formData.current_org}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {message && <p className="form-status">{message}</p>}
      </div>
    </div>
  );
}

export default ContactMe;
