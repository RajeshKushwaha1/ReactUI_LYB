import React from 'react'
import HeaderLogo from "../img/header-logo.png";
const Footer = () => {
    return (
      <div className="footer">
        <div className="text-center mt-1">
          <img className="center-block mx-auto mt-2" src={HeaderLogo} alt="logo" />
        </div>
        <br />
        <div className="below-links text-center">
          <span>Home</span>
          <span>Key features</span>
          <span>Pricing</span>
          <span>Testimonials</span>
          <span>FAQ</span>
        </div>
        <div className="icons text-center">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-github-alt"></i>
        </div>
        <p className="copyright">Copy &#169; rajesh Kushwaha</p>
      </div>
    );
}

export default Footer;
