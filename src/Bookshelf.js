import React, { Component } from 'react'
import './Bookshelf.css'
import Book from './Book.js'



class Bookshelf extends Component {


  render() {
    const { books } = this.props
    let filtered
    let matched
    return (
    <div className = "bookshelf">
      <h2 className = "bookshelf-name"> {this.props.name} </h2>

        <ul className="booklist">
        {books.length == 0 && <p>Your bookshelf is currently empty.</p>}
        {
        books.map(book => {if (book.shelf == this.props.id)

        return <Book key={book.id}/>} )
}


        </ul>
    </div>
    )
  }
}

export default Bookshelf
