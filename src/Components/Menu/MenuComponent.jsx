import React from "react";
import "./MenuComponent.css";

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

const MenuComponent = ({ activeCategory, setActiveCategory, categoryRefs }) => {
  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    // Scroll to the category section
    if (categoryRefs.current[cat]) {
      categoryRefs.current[cat].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="menucomponent">
      <div className="menu-sidebar">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`menu-category ${activeCategory === cat ? "active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;