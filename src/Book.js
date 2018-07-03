import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger.js'
import './Book.css'

class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shelf : 'none'
    }

}

    render() {
      return (
        <li className="book">
        <ShelfChanger />
        <div className="cover"></div>
        <div className="autor"></div>
        <div className="title"></div>

        </li>

      )
    }



}

export default Book
