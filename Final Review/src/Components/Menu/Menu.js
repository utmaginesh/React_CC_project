import React from "react";
import data from './data'; 
import "./Menu.css";
import MenuItems from "./MenuItems";

const Menu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div app="app__specialMenu-title">

      <h1 className="headtext__cormorant">Menu Items</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_foods flex__center">
        <div className="app__specialMenu-menu_items">
          {data.foods.map((wine, index) => (
            <MenuItems
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_starters flex__center">
        <div className="app__specialMenu-menu_items">
          {data.starters.map((cocktail, index) => (
            <MenuItems
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        Order Now
      </button>
    </div>
  </div>
);

export default Menu;
