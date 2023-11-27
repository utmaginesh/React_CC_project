import React, { useState,useEffect } from "react";
import h2 from "../../Assets/img/h2.jpg";
import "./Home.css";
import { useAuth } from '../AuthContext';
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const [value, setValue] = useState('Login / Register');

  useEffect(() => {
    setValue(isLoggedIn ? 'Logout' : 'Login / Register');
  }, [isLoggedIn]); 

  const handleLogin = () => {
    if (isLoggedIn) {
      logout();
    }
    else {
      navigate('/login');
    }
  };
  return (
    <>
    <nav className="app__navbar">
      <div className="app__navbar-appname">
      <span className="p__opensans" style={{fontFamily:'inherit',fontSize:'23px',fontStyle:'initial', color:'#DCCA87'}}>FLAVOR FUSION</span>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About Us</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#order">Order</a>
        </li>
        <li className="p__opensans">
          <a href="#reserve">Reserve Table</a>
        </li>
        <li className="p__opensans">
          <a href="#reviews">Reviews</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a  href="#!" onClick={handleLogin} role="button" className="p__opensans">
          {value}
        </a>
      </div>
    </nav>
      <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">Bringing Flavors to Life, One Plate at a Time</h1>
        <h1 className="p__opensans" style={{ margin: "2rem 0" }}>
        Indulge your senses and embark on a gastronomic journey at Flavor Fusion, where every dish tells a story and every bite is an explosion of flavors
        </h1>
        <button type="button" className="custom__button">
          Explore More
        </button>
      </div>
  
      <div className="app__wrapper_img">
        <img src={h2} alt="header img" />
      </div>
    </div>
    </>
  );
};

export default Home;
