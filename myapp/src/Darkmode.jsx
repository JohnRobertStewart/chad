import React, { useState, useEffect } from 'react';
import "./App.css";

const Darkmode = () => {
//const useLocalStorage = typeof window !== 'undefined' ? localStorage.getItem(darkMode) : null;
const [darkMode, setDarkMode] = useState(false);
console.log("hi2");


useEffect(() => {
    const json = localStorage.getItem("set-dark");
    const currentMode = JSON.parse(json);
    console.log(currentMode);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

useEffect(() => {
    //const darkMode = JSON.parse(localStorage.getItem(darkMode))
    if (darkMode) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        console.log(localStorage.getItem(darkMode));   
        console.log(document.body.classList);             
          
    }else{
       document.body.classList.remove("dark");
       document.body.classList.add("light");
       console.log(localStorage.getItem(darkMode));   
       console.log(document.body.classList);          
        } 
        const json = JSON.stringify(darkMode);
        localStorage.setItem("set-dark", json);          
    }, [darkMode]);

return (
<div className = "darkmode">
    <div>
<img className ="darkbutton" src = {`${darkMode ? require('./components/themelight.png') : require('./components/theme.png')}`}
 onClick={()=>setDarkMode(!darkMode)} alt="dark mode button" height={25} width={25}></img>
    </div>
    <div>
<img className="logo" src={`${darkMode ? require('./components/dark-chad.png') : require('./components/logo.png')}`}  alt="chad art"></img>
    </div>
</div>

  );
};

export default Darkmode;

