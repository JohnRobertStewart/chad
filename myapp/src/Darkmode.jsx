import React, { useState, useEffect } from 'react';
import darkchad from './components/dark-chad.png';
import logo from './components/logo.png';
import theme from './components/theme.png';
import themelight from './components/themelight.png';


import "./App.css";



//const useLocalStorage = typeof window !== 'undefined' ? localStorage.getItem('checkout') : null


const Darkmode = () => {
const [darkMode, setDarkMode] = useState(false);



useEffect(() => {
    if (darkMode) {
        document.body.classList.add("dark");
        <img className="logo" src={+logo} alt="chad art"/>;       
        <button className="foo" src={+theme} alt="button art"/>; 
    }else{
       document.body.classList.remove("dark");
       <img className="logo" src={+darkchad} alt="chad art"/>;      
       <button className="foo" src={+themelight} alt="button art"/>; 
  
        }           
    }, [darkMode, ]);

return (

<div className = 'darkmode'>
<button type="image" src={theme} alt="dark mode button" className="foo" height={25} width={25}
 onClick={() => 
    {
 setDarkMode(!darkMode)  

}
 }

>_________</button>
{ (darkMode) ?
    <img className="logo" src={darkchad} alt="chad art"/>    
    :
    <img className="logo" src={logo} alt="chad art"/>
    }  
</div>

  );
};

export default Darkmode;