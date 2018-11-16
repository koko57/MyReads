import React from 'react';
import './Book.css';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown);

const Book = ({ book, shelf, image, author, title, changeShelf }) => {
  const handleChange = e => {
    const newShelf = e.target.value;
    changeShelf(book, newShelf);
  };

  let style;
  image === 'none'
    ? (style = { background: '#fff' })
    : (style = { backgroundImage: `url(${image})` });

  return (
    <li className="book">
      <select
        name="shelfChanger"
        value={shelf ? shelf : 'none'}
        onChange={handleChange}
      >
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">To Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
      <div className="book-cover" style={style}>
        <div className="icon">
          <p className="icon-text">Change shelf</p>
          <FontAwesomeIcon icon="chevron-down" />
        </div>
      </div>
      <p className="book-info book-info--author">{author}</p>
      <p className="book-info book-info--title">{title}</p>
    </li>
  );
};

Book.propTypes = {
  image: PropTypes.string,
  author: PropTypes.array,
  title: PropTypes.string,
  shelf: PropTypes.string
};

export default Book;
