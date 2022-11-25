import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import Darkmode from './Darkmode.jsx';
import './App.css';

function App() {

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
