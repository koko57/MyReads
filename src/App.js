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
      onPage: [],
      results: [],
      current: [],
      toRead: [],
      read: []
    };
    this.changeShelf = this.changeShelf.bind(this);
    this.searchBook = this.searchBook.bind(this);
    this.clearResults = this.clearResults.bind(this);
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll().then(books => {
      this.setState({
        current: books.filter(book => book.shelf === 'currentlyReading'),
        toRead: books.filter(book => book.shelf === 'wantToRead'),
        read: books.filter(book => book.shelf === 'read'),
        onPage: books.filter(book => book.shelf)
      });
    });
  }

  changeShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(() => this.getBooks());
  }

  searchBook(query) {
    BooksAPI.search(query)
      .then(books => {
        books.map(book =>
          this.state.onPage
            .filter(bk => bk.id === book.id)
            .map(bk => (book.shelf = bk.shelf))
        );
        this.setState({
          results: books
        });
      })
      .catch(() => {
        this.setState({
          results: []
        });
      });
  }

  clearResults() {
    this.setState({ results: [] });
  }

  render() {
    const { current, toRead, read, results } = this.state;
    return (
      <div>
        <Route exact path="/" render={() => (
            <div>
              <nav className="navbar">
                <img
                  className="logo"
                  src={'https://vectr.com/koko57/bK5KH3g7S.svg?width=537&height=179&select=bK5KH3g7Spage0'}
                  alt="MyReads"
                />
                <Link to="/search">
                  <FontAwesomeIcon icon="search" />
                </Link>
              </nav>
              <div className="main">
                <Bookshelf
                  name="Currently reading"
                  id="currentlyReading"
                  books={current}
                  change={this.changeShelf}
                />
                <Bookshelf
                  name="To read"
                  id="wantToRead"
                  books={toRead}
                  change={this.changeShelf}
                />
                <Bookshelf
                  name="Read"
                  id="read"
                  books={read}
                  change={this.changeShelf}
                />
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <Search
              search={this.searchBook}
              books={results}
              shelfChange={this.changeShelf}
              clear={this.clearResults}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
