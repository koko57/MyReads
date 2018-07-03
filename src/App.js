import React, { Component } from 'react';
import Bookshelf from './Bookshelf.js';
import './App.css';
import * as BooksAPI from './BooksAPI.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      all : [],
      currently : [1, 2, 3],
      toRead : [],
      read : []
    }
  }

  componentDidMount() {
      BooksAPI.getAll().then(books => {
      this.setState({ all : books }) })
    }


  render() {
    return (
      <div>
      <nav className="navbar">
        <h1>My Reads</h1>
      </nav>
      <div className="main">
        <Bookshelf name="Currently reading" books={this.state.currently}/>
        <Bookshelf name="To read" books={this.state.toRead}/>
        <Bookshelf name="Read" books={this.state.read}/>
      </div>
      </div>

    );
  }
}

export default App;
