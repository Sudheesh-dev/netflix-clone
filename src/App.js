import React from 'react'
import './App.css';
import Banner from './Banner'
import Shows from './Shows'
import Header from './Header'

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Banner></Banner>
      <Shows></Shows>
    </div>
  );
}

export default App;
