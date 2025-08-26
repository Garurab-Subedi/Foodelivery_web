import React from "react";
import "./Menu.css";

const categories = [
  "DEAL",
  "SNACKS",
  "CHICKEN ROLL",
  "BURGER",
  "RICE MEALS",
  "EXTRAS",
  "BEVERAGE",
  "HOT & CRISPY",
  "POPCORN",
  "FRIES",
  "KRUSHERS",
];

const MenuComponent = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="menucomponent">
      <div className="menu-sidebar">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`menu-category ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
