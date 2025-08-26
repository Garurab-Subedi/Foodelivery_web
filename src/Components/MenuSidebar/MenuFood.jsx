import React from "react";
import "./MenuFood.css";

const menuItems = {
  DEAL: [
    {
      id: 1,
      title: "Veg Rice Bowl With Pepsi",
      desc: "Pepsi Regular, Veg Rice Bowl",
      price: 499,
      img: "/images/veg-bowl.png",
    },
    {
      id: 2,
      title: "Popcorn Rice Bowl With Pepsi",
      desc: "Popcorn Chicken Rice Bowl, Pepsi Regular",
      price: 549,
      img: "/images/popcorn-bowl.png",
    },
    {
      id: 3,
      title: "Veg Rice Bowl With Pepsi",
      desc: "Pepsi Regular, Veg Rice Bowl",
      price: 499,
      img: "/images/veg-bowl.png",
    },
    {
      id: 4,
      title: "Popcorn Rice Bowl With Pepsi",
      desc: "Popcorn Chicken Rice Bowl, Pepsi Regular",
      price: 549,
      img: "/images/popcorn-bowl.png",
    },
    {
      id: 5,
      title: "Veg Rice Bowl With Pepsi",
      desc: "Pepsi Regular, Veg Rice Bowl",
      price: 499,
      img: "/images/veg-bowl.png",
    },
    {
      id: 6,
      title: "Popcorn Rice Bowl With Pepsi",
      desc: "Popcorn Chicken Rice Bowl, Pepsi Regular",
      price: 549,
      img: "/images/popcorn-bowl.png",
    },
  ],
  BURGER: [
    {
      id: 3,
      title: "Zinger Burger",
      desc: "Crispy chicken fillet in a bun",
      price: 299,
      img: "/images/zinger.png",
    },
  ],
  SNACKS: [
    {
      id: 4,
      title: "French Fries",
      desc: "Golden crispy fries",
      price: 199,
      img: "/images/fries.png",
    },
  ],
  // Add other categories...
};

const MenuFood = ({ activeCategory }) => {
  const items = menuItems[activeCategory] || [];

  return (
    <div className="menufood">
      <h2>{activeCategory}</h2>
      <div className="menufood-grid">
        {items.map((item) => (
          <div key={item.id} className="menufood-card">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <p className="price">NRS {item.price}</p>
            <button className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuFood;
