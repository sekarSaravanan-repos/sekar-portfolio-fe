import React from "react";
import "../src/styles.css"; // Assuming you have a CSS file to handle styles

// Example icons (replace with actual paths or icons)
import LinkedInIcon from '../images/linkedin.png';
import TwitterIcon from '../images/twitter.png';
import GitHubIcon from '../images/github.png';
import MediumIcon from '../images/medium.png';
import YouTubeIcon from '../images/youtube.png';
import EmailIcon from '../images/email.png';
import PhoneIcon from '../images/phone.png';

const ContactFooter = () => {
  return (
    <div className="footer-container">
      <h2 className="footer-heading">Contact Me</h2>
      <div className="contact-details">
        <div className="contact-item">
          <img src={EmailIcon} alt="Email" className="contact-icon" />
          <p>lorenipsum@gmail.com</p>
        </div>
        <div className="contact-item">
          <img src={PhoneIcon} alt="Phone" className="contact-icon" />
          <p>415xxxxxxx</p>
        </div>
      </div>
      
      <div className="social-icons">
        <div className="social-item">
          <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
          <p>LinkedIn</p>
        </div>
        <div className="social-item">
          <img src={TwitterIcon} alt="Twitter" className="social-icon" />
          <p>Twitter</p>
        </div>
        <div className="social-item">
          <img src={GitHubIcon} alt="GitHub" className="social-icon" />
          <p>GitHub</p>
        </div>
        <div className="social-item">
          <img src={MediumIcon} alt="Medium" className="social-icon" />
          <p>Medium</p>
        </div>
        <div className="social-item">
          <img src={YouTubeIcon} alt="YouTube" className="social-icon" />
          <p>YouTube</p>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
