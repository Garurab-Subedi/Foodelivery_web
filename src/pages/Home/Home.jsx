import React from 'react';
import './Home.css';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Items from '../../Components/Items/Items';

const Home = () => {
  return (
    <div className='home'>
      <div className='hero-banner'>
       <Hero />   
      </div>
      <div>
         <About />
         <Items />
      </div>

    </div>
  )
}

export default Home;