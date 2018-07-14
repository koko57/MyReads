import React, {
    Component
} from 'react'
import Book from './Book'
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft)

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
    }
    componentDidMount = () => {
        console.log('mounted')
    }

    handleChange = (e) => {
        const query = e.target.value
        this.setState({
            query: query.trim()
        })
        this.props.search(query)
    }

    clearQuery = () => {
        this.setState({
            query: ''
        })
    }

    render() {
        return (
        <div>
            <nav>
            <Link to='/'><FontAwesomeIcon icon="chevron-left" /></Link>
                <h1>My Reads</h1>
                <input type="text" className="search"  placeholder="Search books" 
                value={this.state.query}
                onChange={this.handleChange}/>
            </nav>
            <ul className="booklist">
                { this.props.books.map(book => <Book key={book.id} shelf={book.shelf} changeShelf={this.props.shelfChange} book={book} image={book.imageLinks.thumbnail} author={book.authors} title={book.title}/>) }
            </ul>
        </div>
        )
    }
}
       
export default Search