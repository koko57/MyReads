import React, { Component } from 'react';
import Book from './Book';
import './search.css';
import './responsive.css'
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
        });
        this.props.search(query);
    }

    clearQuery = () => {
        this.props.clear();
        this.setState({
            query: ''
        });
    }

    render() {
        const { books, shelfChange, clear } = this.props;
        return (
        <div>
            <nav className="searchnav">
                <Link to='/'><FontAwesomeIcon icon="chevron-left" onClick={clear} /></Link>
                <img className="logo logo__searchnav" src={"https://vectr.com/koko57/bK5KH3g7S.svg?width=539&height=179.66&select=bK5KH3g7Spage0"} alt="MyReads"/>
                <div className='logo'></div>
                <div className="search-input"><input type="text" className="search"  placeholder="Search books" 
                value={this.state.query}
                onChange={this.handleChange} autoFocus/>
                <FontAwesomeIcon icon="times" onClick={this.clearQuery}/>
                </div>
            </nav>
            <ul className=" booklist booklist__results">
                {books && books.map(book => <Book key={book.id} shelf={book.shelf} changeShelf={shelfChange} book={book} image={book.imageLinks ? book.imageLinks.thumbnail : 'none'} author={book.authors} title={book.title}/>) }
            </ul>
            {books.length === 0 && <p>No search results.</p>}
        </div>
        )
    }
}

Search.propTypes = {
    books: PropTypes.array,
    shelfChange: PropTypes.func,
    clear: PropTypes.func
}

export default Search