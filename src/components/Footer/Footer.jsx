import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-upper">
        <div className="footer-content">
          <div className="footer-section info">
            <span className="footer-title">Sunny Goswami</span>
            <p className="footer-description">
              Software Engineer with over 2 years of experience, currently
              working as a Frontend Developer on IBM
            </p>
          </div>
          <div className="footer-section social">
            <span className="footer-title">SOCIAL</span>
            <div className="footer-social">
              <FaLinkedinIn />
              <FaGithub />
              <FaTwitter />
              <FaSquareInstagram />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-lower">
        <span className="footer-copyright">
          &copy; Copyright 2024. Made by
          <NavLink to="/" className="footer-link">
            {" "}
            Sunny Goswami
          </NavLink>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
