import React, {Component} from 'react';
import './Form.css';

class Form extends Component {



	render() {

		return (
			<div className="container-form">	
			
			<form className="wrapper-form" 
			onSubmit={(e) => this.props.handleSubmit(e)}
			>
			<div
			className="wrapper-data">
			<h2 className="header-form">Friday</h2>
			
			<p className="month"> April</p>
			</div>

			<h2 className="todo-header"> TO DO LIST</h2>
			<p class="count-task">tasks</p>
			<div className="inp-wrap">
			<input
			className="input-text"
			onChange={(e)=> this.props.handleChange(e)}
			value = {this.props.inputFormValue}
			
			/>
			<button
			className="btn" 
			onClick = {(e) => this.props.handleAdd(e)} > add</button>
			</div>
			</form>
			</div>

			);
	}

}

export default Form;