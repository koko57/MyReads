import React, { Component } from 'react';
import Bookshelf from './Bookshelf.js';
import './App.css';
import * as BooksAPI from './BooksAPI.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books : [],
      currentlyReading : [],
      wantToRead : [],
      read : []
    }
  }

  // componentDidMount() {
  //     BooksAPI.getAll().then(books => {
  //
  //     this.setState({ books:books }) }).then(console.log(this.state.books));
  //   }


  componentDidMount = () => {
      this.getMyBooks()
  }

  getMyBooks = () => {
      BooksAPI.getAll().then(books => {
          this.setState({ books: books })
          console.log(this.state)
      })
  }



  render() {
    return (
      <div>
      <nav className="navbar">
        <h1>My Reads</h1>
      </nav>
      <div className="main">
        <Bookshelf name="Currently reading" books={this.state.books} id='currentlyReading'/>
        <Bookshelf name="To read" books={this.state.books} id='wantToRead'/>
        <Bookshelf name="Read" books={this.state.books} id='read'/>
      </div>
      </div>

    );
  }
}

export default App;
