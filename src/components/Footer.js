import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>
            Developed by <span className="developer-name">Abhinav</span>
          </p>
        </div>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/abhinav-upadhyay-67973821b/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
            aria-label="LinkedIn"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://github.com/Abhinav-Upadhyay03"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
            aria-label="GitHub"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            href="mailto:abhi.u3131@gmail.com"
            className="social-link email"
            aria-label="Email"
          >
            <i className="ri-mail-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
