import React, { Component } from 'react'
import './Bookshelf.css'
import Book from './Book.js'



class Bookshelf extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books : this.props.books
        }
    }

  render() {
    const { books } = this.props
    return (
    <div className = "bookshelf">
        <h2 className = "bookshelf-name"> {this.props.name} </h2>
        <ul className="booklist">
        {books.map(book => <Book key={book.id} shelf={book.shelf} changeShelf={this.props.shelfChange} book={book} image={book.imageLinks.thumbnail} author={book.authors} title={book.title}/>)}
        </ul>
    </div>
    )
  }
}

export default Bookshelf
