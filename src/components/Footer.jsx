import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer
        className="footer-cta">
        <div className="footer-cta-content container text-center">
          <h2 className="footer-heading">Let's Work Together</h2>

        </div>

        <div className="footer-contact container">
          <div className="contact-details">
            <div className="contact-items">
              <a
                href="tel:918130220446"
                className="contact-link"
                aria-label="Call Website99"
              >
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                <span>+91 81302 20446</span>
              </a>

              <a
                href="mailto:info@website99.net"
                className="contact-link"
                aria-label="Email Website99"
              >
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                <span>info@website99.net</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <section className="footer-bottom">
        <div className="footer-bottom-container container">
          <div className="footer-bottom-content">
            <p className="footer-copy">
              © {new Date().getFullYear()} WEBSITE99. All Rights Reserved.{' '}
              <a
                href="https://www.website99.net/"
                className="footer-site-link"
                title="Go to Website99 home"
              >
                Website99
              </a>
            </p>

            {/* <div className="footer-social">
              <a
                href="https://api.whatsapp.com/send?phone=918130220446"
                title="Chat on WhatsApp"
                className="social-icon"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                title="Visit Instagram"
                className="social-icon"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://www.facebook.com/"
                title="Visit Facebook"
                className="social-icon"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
