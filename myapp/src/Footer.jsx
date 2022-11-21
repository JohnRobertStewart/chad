import React from 'react';
import shirt from './components/shirty.png';
import "./App.css";



const Footer = () => {
  return (
    <div className = 'footer font-bubble absolute bottom-12 right-12 '>
      <div>
      buy something would ya
      <img className="shirt font-bubble justify-right" src={shirt} alt="cool tye die gear"/>

      </div>
    </div>


  )
}

export default Footer;