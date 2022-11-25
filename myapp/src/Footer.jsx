import React from 'react';
import "./App.css";
import shirt from './components/shirty.png'


const Footer = () => {
  return (
    <div className = 'footer font-bubble absolute bottom-12 right-12 '>
      <div>
      buy AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      <img className="shirt font-bubble justify-right" src={shirt} alt="cool tie die gear" href="https://tinyhandztyedyez.com/" target="_blank" rel="noopener noreferrer"/>

      </div>
    </div>

  )
}

export default Footer;