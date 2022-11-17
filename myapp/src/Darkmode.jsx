import React, { useEffect, useState, useMedia } from 'react';
import darkchad from './components/darkchad.png';
import logo from './components/logo.png';

const useLocalStorage = typeof window !== 'undefined' ? localStorage.getItem('checkout') : null

const Darkmode = () => {
const [darkMode, setDarkMode] = React.useState(false);

React.useEffect(() => {
    if (darkMode) {
        document.body.classList.add("dark");
        <img class="logo" src={logo}/>
    }else{
        document.body.classList.remove("dark");
        <img class="logo" src={darkchad}/>
    }
    }, [darkMode]);

return (

<div id = 'darkmode'>
ASDASDASDSAD
<button onClick={() => setDarkMode(!darkMode)}{...console.log(darkMode)}> Dark mode</button>
{ (darkMode) ?
     <img class="logo" src={darkchad}/>
    :
    <img class="logo" src={logo}/>
    }  
</div>
  );
};


export default Darkmode;