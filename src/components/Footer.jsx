import React from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";
import logo from "../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";

import { FaHome, FaPhoneAlt, FaEnvelope, FaPrint } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row py-5 text-white">
          <div className="col-md-3 col-sm-12">
            <img src={logo} height={50} width={50}></img>
            <p>you can shedule your order </p>
          </div>

          <div className="col-md-3 col-sm-12">
            <h4 className="text-warning">company </h4>
            <Nav class="footer">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </div>
          <div className="col-md-3 col-sm-12">
            <h4 className="text-warning">useful links</h4>
            <p>Shipping rate</p>
            <p>hedear3</p>
          </div>
          <div className="col-md-3 col-sm-12">
            <h4 className="text-warning">Address</h4>
            <FaHome className="me-1" /> company ... <br />
            <FaPhoneAlt className="me-1" /> 03247892 <br />
            <FaEnvelope className="me-1" /> delevery@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
