import React, {Component} from 'react';
import './Task.css';

//child element List
class Task extends Component {
	render() {
		return (
			<div className="task-container">
			<div className="task-wrapper">
			<span
			className="tasks"  
			style = {{textDecoration: this.props.nameTaskProps.done ? 'line-through' : 'none'}} >
			
			{this.props.nameTaskProps.valueArrayTodos} </span>
			<button
			className="btn-checkbox"
			onClick={ () => this.props.handleClick(this.props.index)}>
			{this.props.nameTaskProps.done ? 'Undo' : 'Complete'} 
			</button>
			<button 
			className="btn-edit"
			onClick = { () => this.props.editData(this.props.item, this.props.index )}> edit 
			</button>
			<button 
			className="btn-delete"
			onClick = { () => this.props.deleteData( this.props.index )}> delete 
			</button>

			</div>
			</div>	
			);
	}
}

export default Task;