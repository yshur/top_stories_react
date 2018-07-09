import React, { Component } from 'react'
import MdDelete from 'react-icons/lib/md/delete'
import MdSave from 'react-icons/lib/md/save'
import MdEdit from 'react-icons/lib/md/edit'


class Book extends Component {

	constructor(props) { 
		super(props)
		this.state = {
			editing: false
		}
		this.edit = this.edit.bind(this)
		this.delete = this.delete.bind(this)
		this.save = this.save.bind(this)
		this.renderForm = this.renderForm.bind(this)
		this.renderKindel = this.renderKindel.bind(this)
	}
	edit() {
		// alert('editing')
		console.log('editing')
		this.setState({
			editing: true
		})
		console.log(`editing = ${this.state.editing}`)
		// this.render()
	}
	delete() {
		// alert('delete it')
		console.log('deleting')
		this.props.onDelete(this.props.index)
	}
	save(e) {
		e.preventDefault()
		this.props.onChange(this.newBook.value, this.props.index)
		// alert(this.newIdea.value)
		console.log('saving')
		this.setState({
			editing: false
		})

		console.log(`editing = ${this.state.editing}`)
	}

	renderForm() {
		return (
			<div>
			<form onSubmit={this.save}>
				<textarea ref={input => this.newBook = input}/>
				<button className="btn btn-primary" onClick={this.save}>Save <MdSave/></button>
			</form>
			</div>
		)
	}
	renderKindel() {
		return ( 
			<div className='book card-body'>
				<div>{this.props.children}</div>
				<span>
					<button className="btn btn-primary" style={{marginRight: 7+'px'}} onClick={this.edit}>Edit <MdEdit /></button>
					<button className="btn btn-primary" onClick={this.delete}>Delete <MdDelete /></button>
				</span>				
				
			</div>			
		)
	}

	render() {
		if (this.state.editing === true) 
			return this.renderForm();
		else
			return this.renderKindel();
	}
}

export default Book
