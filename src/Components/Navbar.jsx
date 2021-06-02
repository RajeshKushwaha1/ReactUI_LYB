import React from 'react';
import HeaderLogo from "../img/header-logo.png";

const Navbar = () => {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src={HeaderLogo} className="img-fluid" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Key Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Testimonial
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <button className="btn btn-primary p-1">Try for free</button>
              </li>
            </ul>
          </div>
        </nav>
        
      </>
    );
}

export default Navbar
