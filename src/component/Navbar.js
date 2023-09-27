import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGem } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="header-container">
      <div className="nav-container">
        {/* <FontAwesomeIcon icon={faGem} style={{ color: "#ff1900" }} /> */}
        <div className="logo1"></div>
        <div className="logo2"></div>
        <h1>Portfolio</h1>
      </div>
      <div className="nav-links">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Service">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#page">Page</a>
        <a href="#contact">Contact</a>
        <button className="primary-button">Get Free Consultant </button>
      </div>
    </nav>
  );
};

export default Navbar;
