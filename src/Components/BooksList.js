import React, { Component } from 'react'
import Book from './Book'
import MdAdd from 'react-icons/lib/md/add'

class BooksList extends Component {
	numForId = 4;
	constructor(props) { 
		super(props)
		this.state = {
			Books: []
		}
		this.eachBook = this.eachBook.bind(this)
		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
		this.add = this.add.bind(this)
		// this.nextID = this.nextID.bind(this)
	}

	componentDidMount() {
		var url = this.props.url;
		if(this.props.method === 'get') {
			fetch(url)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					var self=this;
	        		data.TopStories.map((book) => {
	            		console.log(book)
	            		self.add(book.id, book.bookname, book.description, book.stars, book.Author, book.Publisher, book.PublisherData, book.Language, book.prices);

	        		})
			 })
		} else if (this.props.method === 'post') {
			var params = this.props.params
			fetch(this.props.url, {
			  method: 'POST',
			  headers: {
			    Accept: 'application/json',
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({
			  	params
			  }),
			})
			.then((res) => {
					console.log(res)
					return res.json();
				})
				.then((data) => {
					console.log(data)
					var self=this;
	        		data.TopStories.map((book) => {
	            		console.log(book)
	            		self.add(book.id, book.bookname, book.description, book.stars, book.Author, book.Publisher, book.PublisherData, book.Language, book.prices);

	        		})
			 })
		}
	 }

	eachBook(book, i) {
		// console.log(book)
		return (
		<div className="card" >
        <div className="card-body">
				<Book key={book.id} index={book.id} 
				onChange={this.update}
				onDelete={this.delete}>
					<h5 className="card-title">{book.bookname}</h5>
					<p className="card-text">{book.description}</p>
					<p className="card-text">Rate: {book.stars}</p>
					<p className="card-text">written by {book.Author}</p>
					<p className="card-text">published by {book.Publisher} in {book.Language} on {book.PublisherData}</p>
					<h5 className="card-title">Now Sale!!! only {book.prices[0].price}$</h5>
				</Book>
        </div>
        </div>
			
		)
	}
	update(newBook, i) {
		console.log('update: '+i+' '+newBook)
		this.setState(prevState => ({
			Books: prevState.Books.map(
				Book => (Book.id !== i) ? Book : {...Book,bookname:newBook}
			)
		}))
	}
	delete(id) {
		console.log('deleted: '+id)
		this.setState(prevState => ({
			Books: prevState.Books.filter(Book => Book.id !== id)
		}))
	}
	add(id, bookname, description, stars, Author, Publisher, PublisherData, Language, prices) {
		// console.log(typeof id)
		if ((typeof id) !== 'number') {
			var bookname = "some name";
			var Author = "some human name";
			var id = this.numForId++;
			var description = "some description";
			var stars = 4;
			var Publisher = "some publisher",
				PublisherData = "some date",
				Language = "some Language",
				prices = [{price:90}]

		}

		this.setState(prevState => ({
			Books: [
				...prevState.Books,
				{
					id:id,
					bookname: bookname,
					Author: Author,
					description: description,
					stars: stars,
					Language: Language,
					PublisherData: PublisherData,
					Publisher: Publisher,
					prices: prices
				}]
		}))
		
	}	

	render() {
		console.log(this.state.Books);
		return ( 
		 <div className="card BooksList" style={{width: 50+'em', marginBottom: 7+'px'}}>
		 	{this.state.Books.map(this.eachBook)}
			<br/><button onClick={this.add}
			id="add" className="btn btn-primary" style={{marginRight: 7+'px'}}>
			Add <MdAdd/></button>
		</div>
		)
				
	}
}

export default BooksList