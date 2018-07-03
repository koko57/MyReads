import React from 'react';
import './Book.css'


const ShelfChanger = () => (
  <div className="shelf-changer">
      <select name="shelfChanger" id="shelfChanger" >
          <option value="move" disabled>Move to shelf:</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="toRead">To Read</option>
          <option value="read">Read</option>
          <option value="none">Delete from library</option>
      </select>
  </div>
);


export default ShelfChanger
