import React from 'react';
import './Home.css';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';

const Home = () => {
  return (
    <div className='home'>
      <div className='hero-banner'>
       <Hero />   
      </div>
      <div>
         <About />
      </div>

    </div>
  )
}

export default Home;