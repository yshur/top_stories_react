import React, { Component } from 'react'
import BooksList from './BooksList'

class BestPrice extends Component {

	constructor(props) { 
		super(props)
		this.state = {
			editing: true,
			price: 0,
			stars: 5,
			url: "",
			method: "get",
			params: ""
		}
    	this.renderForm = this.renderForm.bind(this);
    	this.renderUI   = this.renderUI.bind(this);
    	this.setPriceStars = this.setPriceStars.bind(this);

   	}

   	setPriceStars(e) {
   		e.preventDefault();

   		var newPrice = document.getElementById('price').value
   		var newStars = document.getElementById('stars').value
   		this.setState({
   			price: newPrice,
			stars: newStars,
   			editing: false,
   			url: `https://top-stories-api.herokuapp.com/best_stars_price?stars=${newStars}&price=${newPrice}`
   		});
   	
   	}

	renderForm() {
		return (
			<div className="container" style={{width: 50+'em', marginBottom: 7+'px'}}>
			  <h2>Get Top Book With The Best Price</h2>
			  <p>In order to search the top books with the best price, 
			   choose max price that you want to pay and book minimum stars (1 stars until 5) that you want to find</p>
			  <form onSubmit={this.setPriceStars}>
			    <div className="form-group">
			      <label>Max Price:</label>
			      <input type="number" className="form-control" placeholder="Enter Max Price" id="price" />
			    </div>
			    <div className="form-group">
			      <label>Min Rate Starts:</label>
			      <input type="number" className="form-control" placeholder="Enter Stars" id="stars" />
			    </div>
			    <button type="submit" className="btn btn-default" onClick={this.setPriceStars} >Submit</button>
			  </form>
			</div>
		)
	}


	renderUI() {
   	//	this.setUrl();

		console.log(this.state.editing)
   		console.log(this.state.price)
   		console.log(this.state.stars)
   		console.log(this.state.url)
		return ( 
		 <div className="card BooksList" style={{width: 50+'em', marginBottom: 7+'px'}}>
		 	<BooksList key='22536' index='22536' url={this.state.url} method={this.state.method}
		 		params={this.state.params} />
		</div>
		)
				
	}

	render() {
	  return (
	    this.state.editing ? this.renderForm() : this.renderUI()
	  )
	}
}

export default BestPrice