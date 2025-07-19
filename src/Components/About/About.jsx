import React from 'react'
import './About.css';
import about from '../../assets/about/about-1.jpg';
import pizza from '../../assets/about/pizza.png'
import deliverybike from '../../assets/about/delivery-bike.png';
import salad from '../../assets/about/salad.png';
const About = () => {
  return (
    <div className='about'>
        <p className='about-header'>THE BURGER TASTES BETTER WHEN YOU <br/> YOU EAT IT WITH YOUR FAMILY</p>
        <p className='about-desc'> Fengjai primis ligula risus auctor laoreet augue egestas mauris
      viverra tortor in laculis pretium at magna mauris ipsum primis <br/>augue egestas mauris
      viverra tortor in laculis pretium at magna mauris ipsum primis
      rhoncus fengjai</p>
      <button className="about-button">EXPLORE FULL NOW</button>
        <div className='about-image'>
          <img src={about} alt="" height="700px"/>
        </div>
        <div className="about-banner">
          <div className="about-original">
            <img src={pizza} alt="" height="30px"/>
            <h1>ORIGINAL</h1>
            <p>Fengjai primis ligula risus auctor laoreet augue egestas mauris
             viverra tortor in laculis pretium at magna mauris ipsum primis</p>
          </div>
          <div className="about-original">
            <img src={salad} alt="" height="30px"/>
            <h1>QUALITY FOODS</h1>
            <p>Fengjai primis ligula risus auctor laoreet augue egestas mauris
             viverra tortor in laculis pretium at magna mauris ipsum primis</p>
          </div>
          <div className="about-original">
            <img src={deliverybike} alt="" height="30px"/>
            <h1>FASTEST DELIVERY</h1>
            <p>Fengjai primis ligula risus auctor laoreet augue egestas mauris
             viverra tortor in laculis pretium at magna mauris ipsum primis</p>
          </div>
        </div>
    </div>
  )
}

export default About