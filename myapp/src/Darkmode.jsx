import React, { useState, useEffect } from 'react';
import darkchad from './components/dark-chad.png';
import logo from './components/logo.png';
import "./App.css";


//const useLocalStorage = typeof window !== 'undefined' ? localStorage.getItem('checkout') : null

const Darkmode = () => {
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
    if (darkMode) {
        document.body.classList.add("dark");
        <img className="logo" src={+logo} alt="chad art"/>
    }else{
       document.body.classList.remove("dark");
        <img className="logo" src={+darkchad} alt="chad art"/>
    }
    }, [darkMode]);

return (

<div className = 'darkmode'>
ASDASDASDSAD
<button onClick={() => setDarkMode(!darkMode)}{...console.log(darkMode)}> Dark mode</button>
{ (darkMode) ?
     <img className="logo" src={darkchad} alt="chad art"/>
    :
    <img className="logo" src={logo} alt="chad art"/>
    }  
</div>
  );
};


export default Darkmode;