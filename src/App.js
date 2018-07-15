import React, { Component } from 'react';
import Bookshelf from './Bookshelf.js';
import './App.css';
import * as BooksAPI from './BooksAPI.js';
import { Route, Link } from 'react-router-dom';
import Search from './search';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      current: [],
      toRead: [],
      read: []
    };
    this.changeShelf = this.changeShelf.bind(this);
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll().then(books => {
      this.setState({
        current: books.filter(book => book.shelf === 'currentlyReading'),
        toRead: books.filter(book => book.shelf === 'wantToRead'),
        read: books.filter(book => book.shelf === 'read')
      });
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.getBooks());
  }

  searchBook = (query) => {
    BooksAPI.search(query).then((books) => {
      books.map(book => (this.state.results.filter(b => b.id === book.id).map(b => book.shelf = b.shelf)));
      this.setState({
        results : books
      });
    }).catch(() => {
      this.setState({
        results : []
      });
    });
  }

  render() {
    const { current, toRead, read, results } = this.state;
    return (
      <div>
        <Route exact path='/' render={() => (
          <div>
            <nav className="navbar">
              <h1>My Reads</h1>
              <Link to='/search'><FontAwesomeIcon icon="search" /></Link> 
            </nav>
            <div className="main" >
              <Bookshelf name="Currently reading" id='currentlyReading' books={current} shelfChange={this.changeShelf} />
              <Bookshelf name="To read" id='wantToRead' books={toRead} shelfChange={this.changeShelf} />
              <Bookshelf name="Read" id='read' books={read} shelfChange={this.changeShelf} /> 
            </div>
          </div>
          )
        }/>
        <Route path='/search' render={({ history }) => ( 
          <Search search={this.searchBook} books={results} shelfChange={this.changeShelf}/>
          )
        }/> 
      </div>
    );
  }
}

export default App;