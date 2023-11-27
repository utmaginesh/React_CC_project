import React from "react";
import abt from "../../Assets/img/abt.jpeg";

import "./About.css";

const About = () => (
  <div className="app__bg app__wrapper section__padding" id="about">
    <div className="res1">
      <img src={abt} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      
      <h1 className="headtext__cormorant">About Us</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="p__opensans">
          Welcome to Flavor Fusion, where culinary creativity meets delightful experiences!<br></br><br></br>At Flavor Fusion, we believe in the power of good food to bring people together. Every dish we serve is crafted with care, from the selection of ingredients to the presentation on your plate.<br></br><br></br> Our commitment to quality and innovation sets us apart.
          Meet the talented individuals behind the scenes at Flavor Fusion.<br></br><br></br>Our chefs are culinary artists dedicated to pushing the boundaries of taste, and our staff is committed to providing you with a memorable dining experience.</p>
          
        </div>
      </div>
    </div>
  </div>
);

export default About;
