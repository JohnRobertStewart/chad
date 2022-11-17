import './App.css';
import './index.css';
import Header from './Header.jsx'
import Content from './Content.jsx'
import React, {useState} from 'react';
import Footer from './Footer.jsx';
import Darkmode from './Darkmode.jsx';
function App() {
const [darkMode, setDarkMode] = React.useState(false);

  return (    
    <div className="App">   
    <Darkmode />
    <Header />
    <Content />
    <Footer />
  
    </div>
   
  );
}

export default App;
