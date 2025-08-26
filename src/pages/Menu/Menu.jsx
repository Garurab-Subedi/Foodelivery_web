import React, { useState } from "react";
import MenuComponent from "../../Components/Menu/MenuComponent.jsx";
import MenuFood from "../../Components/MenuSidebar/MenuFood.jsx";
import "./Menu.css";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("DEAL");

  return (
    <div className="menu">
      <MenuComponent
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      {/* <MenuFood activeCategory={activeCategory} /> */}
    </div>
  );
};

export default Menu;
