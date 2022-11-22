import React, { useState, useEffect } from 'react';

import "./App.css";

//const useLocalStorage = typeof window !== 'undefined' ? localStorage.getItem('checkout') : null
const Darkmode = () => {
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
    if (darkMode) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        console.log("darkmodework");   
        console.log(document.body.classList);             
          
    }else{
       document.body.classList.remove("dark");
       document.body.classList.add("light");
       console.log("darkmodeworklight");
       console.log(document.body.classList);          
        }           
    }, [darkMode]);

return (
<div className = "darkmode">
    <div>
<img className ="darkbutton" src = {`${darkMode ? require('./components/themelight.png') : require('./components/theme.png')}`} onClick={()=>setDarkMode(!darkMode)} alt="dark mode button" height={25} width={25}></img>
    </div>
    <div>
<img className="logo" src={`${darkMode ? require('./components/dark-chad.png') : require('./components/logo.png')}`}  alt="chad art"></img>
    </div>
</div>

  );
};

export default Darkmode;

