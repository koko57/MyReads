import React, { Component } from 'react'
import './Bookshelf.css'
import Book from './Book.js'



class Bookshelf extends Component {


  render() {
    const { books } = this.props
    return (
    <div className = "bookshelf">
      <h2 className = "bookshelf-name"> {this.props.name} </h2>

        <ul className="booklist">
{books.length == 0 && <p>Your bookshelf is currently empty.</p>}
        {books.map((book, id) => (
        <Book key={id}/>
))}



        </ul>
    </div>
    )
  }
}

export default Bookshelf
