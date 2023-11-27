import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact us</h1>
        <p className="p__opensans">Skcet,Kuniyamuthur,Coimbatore</p>
        <p className="p__opensans">012345678</p>
        <p className="p__opensans">987654321</p>
      </div>
      <div className="app__footer-links_logo">
        <h1 className="app__footer-headtext">FLAVOR FUSION</h1>
        <p className="p__opensans">
          The best way to find yourself is to lose yourself in the service of
          others
        </p>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">07:00 am - 11:00 am</p>
      </div>
    </div>
  </div>
);

export default Footer;
