import React from 'react';
import './Book.css';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown);

const Book = (props) => {
    const handleChange = (e) => {
        const newShelf = e.target.value;
        props.changeShelf(props.book, newShelf);
    };
    return (
      <li className="book">
      <select name="shelfChanger" value={props.shelf} onChange={handleChange}>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">To Read</option>
            <option value="read">Read</option>
            <option value="none">Delete from library</option>
        </select>
      <div className="book-cover" style={{backgroundImage:`url(${props.image})`}}>
      <div className="icon"><p className="icon-text">Change shelf</p><FontAwesomeIcon icon="chevron-down" /></div>
      </div>
      <p className="book-info book-info--author">{props.author}</p>
      <p className="book-info book-info--title">{props.title}</p>
      </li>
    )
}

Book.propTypes = {
    image: PropTypes.string,
    author: PropTypes.array,
    title: PropTypes.string,
    shelf: PropTypes.string
}

export default Book
