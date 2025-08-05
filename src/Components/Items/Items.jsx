import React from 'react';
import './Items.css';
import burger1 from '../../assets/menu/burger-11.jpg';
import burger2 from '../../assets/menu/burger-12.jpg';
import burger3 from '../../assets/menu/burger-13.jpg';
import burger4 from '../../assets/menu/burger-14.jpg';
import ItemCard from '../../props/itemCard'
import { Link } from 'react-router-dom';


const itemData = [
  { image: burger1, title: 'Cheesy Burger', description: 'A juicy cheesy delight with extra cheese.' },
  { image: burger2, title: 'Ham Burger', description: 'Classic ham burger with fresh veggies.' },
  { image: burger3, title: 'Chicken Burger', description: 'Crispy chicken patty with spicy sauce.' },
  { image: burger4, title: 'Big Daddy Burger', description: 'Loaded with meat and triple cheese.' },
  { image: burger1, title: 'Double Cheese', description: 'Extra cheesy double layer burger.' },
  { image: burger2, title: 'Spicy Burger', description: 'Packed with hot flavors and jalapeños.' },
  { image: burger3, title: 'BBQ Burger', description: 'Grilled BBQ burger with smoky taste.' },
  { image: burger4, title: 'Monster Burger', description: 'The ultimate feast for burger lovers.' },
];


const Items = () => {
  return (
    <div className="items">
      <div className="item-heading">
        <h1>OUR CRAZY BURGER</h1>
        <p>
          Fengjai primis ligula risus auctor laoreet augue egestas mauris viverra
          tortor in laculis pretium at magna mauris ipsum primis rhoncus fengjai
        </p>
      </div>

      <div className="item-container">
        {itemData.map((item, index) => (
          <Link to={`/food/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ItemCard image={item.image} title={item.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Items;
