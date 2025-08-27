import React, { useState, useRef, useEffect } from "react";
import './Menu.css'
import MenuComponent from "../../Components/Menu/MenuComponent.jsx";
import MenuFood from "../../Components/MenuSidebar/MenuFood.jsx";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("DEAL");
  const categoryRefs = useRef({});

  // Function to update active category based on scroll position
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="menu">
      <MenuComponent
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categoryRefs={categoryRefs}
      />
      <MenuFood 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange}
        categoryRefs={categoryRefs}
      />
    </div>
  );
};

export default Menu;