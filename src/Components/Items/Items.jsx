import React from 'react'
import './Items.css'
import burger1 from '../../assets/menu/burger-11.jpg'
// import burger2 from '../../assets/menu/burger-12.png';
// import burger3 from '../../assets/menu/burger-13.png';
// import burger4 from '../../assets/menu/burger-14.png';

const Items = () => {
  return (
    <div className='items'>
        <div className='item-heading'>
            <h1>OUR CARZY BURGER</h1>
            <p>Fengjai primis ligula risus auctor laoreet augue egestas mauris
            viverra tortor in laculis pretium at magna mauris ipsum primis
            rhoncus fengjai</p>
      </div>
      <div className="item-container">
        <div className="item-card">
          <img src={burger1} alt="Burger" height="100px"/>
          <h2>Cheesy Burger</h2>
          <p>$5.99</p>
        </div>
      </div>
    </div>
  )
}

export default Items