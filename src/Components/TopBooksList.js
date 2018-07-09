import React, { Component } from 'react'
import BooksList from './BooksList'

class TopBooksList extends Component {

	constructor(props) { 
		super(props)
		this.state = {
			url: "https://top-stories-api.herokuapp.com/getalltop",
			method: "get",
			params: ""
		}
	}

	render() {
		return ( 
		 <div className="card BooksList" style={{width: 50+'em', marginBottom: 7+'px'}}>
		 	<BooksList key='22536' index='22536' url={this.state.url} method={this.state.method}
		 		params={this.state.params} />
		</div>
		)
				
	}
}

export default TopBooksList