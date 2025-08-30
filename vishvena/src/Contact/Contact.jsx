import React from "react";
import "./Contact.modular.css";

const Contact = () => {
  return (
    <footer className="contact-footer">
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-left">
          <p>© 2024 Vishvena. All rights reserved.</p>
        </div>

        {/* Middle Section */}
        <div className="contact-middle">
          <h4>Get in Touch</h4>
          <p>
            No. 4-28/36/1, Kandi, Saraswati Temple Kandi, <br />
            Sangareddy Medak 502285 Telangana
          </p>
          <p>
            <a href="mailto:info@vishvena.com">info@vishvena.com</a>
          </p>
          <p>
            <a href="tel:+918296348166">+91 8296348166</a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="contact-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Expertise Area</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="contact-newsletter">
          <h4>Our Newsletter</h4>
          <p>Subscribe to our newsletter to get our news & deals delivered to your inbox!</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button>JOIN</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
