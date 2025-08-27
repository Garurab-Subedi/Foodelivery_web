import React, { useEffect, useRef } from "react";
import "./MenuFood.css";
import burger1 from '../../assets/menu/burger-11.jpg'
import burger2 from '../../assets/menu/burger-12.jpg'
import burger3 from '../../assets/menu/burger-14.jpg'
import burger4 from '../../assets/menu/burger-13.jpg'
import burger5 from '../../assets/menu/burger-15.jpg'
import burger6 from '../../assets/menu/burger-16.jpg'

const menuItems = {
  DEAL: [
    {
      id: 1,
      title: "Veg Rice Bowl With Pepsi",
      desc: "Pepsi Regular, Veg Rice Bowl",
      price: 499,
      img: burger1,
    },
    {
      id: 2,
      title: "Popcorn Rice Bowl With Pepsi",
      desc: "Popcorn Chicken Rice Bowl, Pepsi Regular",
      price: 549,
      img: burger2
    },
    {
      id: 3,
      title: "Veg Rice Bowl With Pepsi",
      desc: "Pepsi Regular, Veg Rice Bowl",
      price: 499,
      img: burger3
    },
    {
      id: 4,
      title: "Popcorn Rice Bowl With Pepsi",
      desc: "Popcorn Chicken Rice Bowl, Pepsi Regular",
      price: 549,
      img: burger4
    },
    {
      id: 5,
      title: "Veg Rice Bowl With Pepsi",
      desc: "Pepsi Regular, Veg Rice Bowl",
      price: 499,
      img: burger5
    },
    {
      id: 6,
      title: "Popcorn Rice Bowl With Pepsi",
      desc: "Popcorn Chicken Rice Bowl, Pepsi Regular",
      price: 549,
      img: burger6
    },
  ],
  BURGER: [
    {
      id: 3,
      title: "Zinger Burger",
      desc: "Crispy chicken fillet in a bun",
      price: 299,
      img: burger6
    },
  ],
  SNACKS: [
    {
      id: 4,
      title: "French Fries",
      desc: "Golden crispy fries",
      price: 199,
      img: burger2,
    },
  ],
  // Add other categories...
};

const MenuFood = ({ activeCategory, onCategoryChange, categoryRefs }) => {
  const containerRef = useRef();
  const observerRef = useRef();

  useEffect(() => {
    // Set up Intersection Observer to detect which category is in view
    const options = {
      root: containerRef.current,
      rootMargin: '-20% 0px -70% 0px', // Adjust these values to fine-tune detection
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onCategoryChange(entry.target.dataset.category);
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, options);

    // Observe all category sections
    Object.values(categoryRefs.current).forEach(ref => {
      if (ref) {
        observerRef.current.observe(ref);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [onCategoryChange, categoryRefs]);

  return (
    <div className="menufood" ref={containerRef}>
      <div className="menufoodWapper">
        {Object.entries(menuItems).map(([category, items]) => (
          <div 
            key={category} 
            className="category-section"
            ref={el => categoryRefs.current[category] = el}
            data-category={category}
          >
            <h2 className="menufood-header">{category}</h2>
            <div className="menufood-grid">
              {items.map((item) => (
                <div key={item.id} className="menufood-card">
                  <img src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p className="menufood-desc">{item.desc}</p>
                  <div className="menufood-price">
                    <p className="price">NRS {item.price}</p>
                    <button className="add-btn">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuFood;