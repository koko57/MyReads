import React from 'react';
import './Bookshelf.css';
import Book from './Book.js';
import PropTypes from 'prop-types';

const  Bookshelf = (props) => {
    const { books, name, change } = props;
    return (
    <div className = "bookshelf">
        <h2 className = "bookshelf-name"> {name} </h2>
        <ul className="booklist">
        {books && books.map(book => <Book key={book.id} shelf={book.shelf} changeShelf={change} book={book} image={book.imageLinks.thumbnail} author={book.authors} title={book.title}/>) }
        </ul>
        {books.length === 0 && <p>This shelf is currently empty.</p>}
    </div>
    )
}

Bookshelf.propTypes = {
    name: PropTypes.string,
    books: PropTypes.array.isRequired,
    change: PropTypes.func
}

export default Bookshelf
