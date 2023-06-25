import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
      <div className="container">
        <div className="social-media">
          <a href="https://example.com"><i className="fab fa-facebook">Facebook</i></a>
          <a href="https://example.com"><i className="fab fa-twitter">Twiter</i></a>
          <a href="https://example.com"><i className="fab fa-instagram">Instagram</i></a>
        </div>
        <div className="contact-info">
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
