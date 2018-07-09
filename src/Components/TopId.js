import React, { Component } from 'react'
import BooksList from './BooksList'

class TopId extends Component {

	constructor(props) { 
		super(props)
		this.state = {
			editing: true,
			id: 0,
			url: "https://top-stories-api.herokuapp.com/gettopbyid",
			method: "post",
			params: ""
		}
    	this.renderForm = this.renderForm.bind(this);
    	this.renderUI   = this.renderUI.bind(this);
    	this.setID = this.setID.bind(this);

   	}

   	setID(e) {
   		e.preventDefault();

   		var newID = document.getElementById('id').value
   		this.setState({
   			id: newID,
   			editing: false,
   			params: {id: newID,}
   		});
   	
   	}

	renderForm() {
		return (
			<div className="container" style={{width: 50+'em', marginBottom: 7+'px'}}>
			  <h2>Get Top Book By ID</h2>
			  <form onSubmit={this.setID}>
			    <div className="form-group">
			      <label>Book Id:</label>
			      <input type="number" className="form-control" placeholder="Enter Book Id" id="id" />
			    </div>
			    <button type="submit" className="btn btn-default" onClick={this.setID} >Submit</button>
			  </form>
			</div>
		)
	}


	renderUI() {
   	//	this.setUrl();

		console.log(this.state.editing)
   		console.log(this.state.id)
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

export default TopId