import React, { Component } from 'react'
import './Bookshelf.css'



class Bookshelf extends Component {
  render() {
    return (
    <div className = "bookshelf">
      <h2 className = "bookshelf-name"> {this.props.name} </h2>
        <ul className="booklist">
          <li className="book"></li>
        </ul>
    </div>
    )
  }
}

export default Bookshelf
