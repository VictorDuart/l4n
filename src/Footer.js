import React from "react";
import "./App.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <button className="footer-button">
          <FaFacebookF />
        </button>
        <button className="footer-button">
          <FaInstagram />
        </button>
      </div>
      <div className="footer-center">
        <p>Darl4n All Rights Reserved</p>
      </div>
      <div className="footer-right">
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
}

export default Footer;
