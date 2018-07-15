import React, { Component } from 'react';
import Book from './Book';
import './search.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add([faChevronLeft, faTimes]);

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    handleChange = (e) => {
        const query = e.target.value
        this.setState({
            query: query.trim()
        })
        this.props.search(query);
    }

    clearQuery = () => {
        this.setState({
            query: ''
        });
    }

    render() {
        const { books, shelfChange } = this.props;
        return (
        <div>
            <nav>
                <Link to='/'><FontAwesomeIcon icon="chevron-left" /></Link>
                <h1>My Reads</h1>
                <div className='logo'></div>
                <div className="search-input"><input type="text" className="search"  placeholder="Search books" 
                value={this.state.query}
                onChange={this.handleChange}/>
                <FontAwesomeIcon icon="times" onClick={this.clearQuery}/>
                </div>
            </nav>
            <ul className=" booklist booklist__results">
                {books && books.map(book => <Book key={book.id} shelf={book.shelf} changeShelf={shelfChange} book={book} image={book.imageLinks.thumbnail} author={book.authors} title={book.title}/>) }
            </ul>
        </div>
        )
    }
}
Search.propTypes = {
    books: PropTypes.array,
    shelfChange: PropTypes.func
}

export default Search