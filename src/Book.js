import React, { Component } from 'react'
import './Book.css'

class Book extends Component {
  constructor(props) {
    super(props)
  
}
    handleChange = (e) => {
        const newShelf = e.target.value
        this.props.changeShelf(this.props.book, newShelf)
    }

    render() {
      return (
        <li className="book">
          <select name="shelfChanger" value={this.props.shelf} onChange={this.handleChange}>
              <option value="move" disabled>Move to shelf:</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">To Read</option>
              <option value="read">Read</option>
              <option value="none">Delete from library</option>
          </select>
        <div className="book-cover" style={{backgroundImage:`url(${this.props.image})`}}></div>
        <div className="book-info book-info--author">{this.props.author}</div>
        <div className="book-info book-info--title">{this.props.title}</div>
        </li>
      )
    }
}

export default Book
