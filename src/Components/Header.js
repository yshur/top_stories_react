import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
	active = {
		fontWeight: "bold",
		color: "green"
	};
	header = {
		display: "flex",
		justifyContent: "space-evenly",
		listStyle: "none"
	};

	render() {
		return(
			<div style={this.header}>
				<NavLink exact to="/" activeStyle={this.style} >
				Home
				</NavLink>
				<NavLink exact to="/BestPrice" activeStyle={this.active} >
				Best Price
				</NavLink>
				<NavLink exact to="/TopId" activeStyle={this.active} >
				Top Books
				</NavLink>
			</div>
		);
	}
}

export default Header
