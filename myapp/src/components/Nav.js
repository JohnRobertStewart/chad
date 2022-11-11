import React from 'react';

class Navbar extends React.Component{
    render(){
        return (
            <div>
                <ul id="nav">
                    <li><a href="#">dark-mode</a></li>
                    <li><a href="#">home</a></li>
                    <li><a href="#">service</a></li>              
                    <li><a href="#">links</a></li> 
                    <li><a href="#">affiliations</a></li>                
                </ul>
            </div>
        )
    }
}

export default function App(){
    const [darkMode, setDarkmode] =useState(false);
    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="container">
                <span style={{color: darkMode ? "grey" : "yellow"}}>*</span>
                    <div className="switch-checkbox">


                </div>
            </div>
        </div>
    )

}