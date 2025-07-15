import React from 'react';
import './Home.css';
import backgroundhero from '../../assets/hero/hero-1.jpg'


const Home = () => {
  return (
    <div className='home'>
      <div className='hero-container'>
        <img src={backgroundhero} alt="" />
      </div>
    </div>
  )
}

export default Home;