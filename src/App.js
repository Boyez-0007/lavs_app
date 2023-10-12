import './App.css';
import React from 'react';
import Footer from './JS/Footer';
import Content from './JS/Content';
import HeaderBar from './JS/HeaderBar';
import Header from './JS/Header';
function App() {
  return (

    <div >
      <b><HeaderBar /></b>
      <b><Header/></b>
      <b><Content/></b>
      
      <b><Footer/></b>
    </div>
  )
}

export default App;
