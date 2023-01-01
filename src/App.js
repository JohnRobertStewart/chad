import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import Darkmode from './Darkmode.jsx';
import CardMedia from "@material-ui/core/CardMedia";
import './App.css';

function App() {

  return (    
    <div className="App"> 
    <Header />  
    <Darkmode />  
    <Content />
    <Footer />
    </div>   
  );
}

export default App;
