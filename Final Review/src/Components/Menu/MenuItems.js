import React from "react";

import "./Menu.css";

const MenuItems = ({ title, price }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

      <div className="app__menuitem-dash" />

      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
  </div>
);

export default MenuItems;
