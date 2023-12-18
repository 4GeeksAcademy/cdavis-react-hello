import React from "react";
import PropTypes from "prop-types";

// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// create your first component
const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Hello Rigo!</h1>
      <p>
        <img src={rigoImage} alt="Rigo Baby" />
      </p>
      <a href="#" className="btn btn-success">
        If you see this green button... bootstrap is working...
      </a>
      <p>
        Made by{" "}
        <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!
      </p>
    </div>
  );
};

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
	</nav>
  );
};

Navbar.propTypes = {
  navbarUrl: PropTypes.string,
  navbarLabel: PropTypes.string,
};

export { Home, Navbar }; // Use named exports instead of export default
