import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
    return (
        
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.logo}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            
            
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        
    );
};

Navbar.prototype = {
  logo: PropTypes.string
}

export default Navbar;