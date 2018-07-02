import React, { Component } from 'react';
import Bookshelf from './Bookshelf.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Bookshelf name="Currently reading" />
        <Bookshelf name="To read" />
        <Bookshelf name="Read" />
      </div>
    );
  }
}

export default App;
