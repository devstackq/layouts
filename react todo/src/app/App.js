import React, {Component} from 'react';
import './App.css';


import Form from './Form/Form';
import List from './List/List';

  
class App extends Component {
	state = {
		inputValue: '',
		todos: [
		{valueArrayTodos: 'do  home task js', done: false},
		{valueArrayTodos: 'find girl', done: true},
		{valueArrayTodos: 'death super ego', done: true}
		],
    done: true,
    disabled: true
	}

//when change data inside input - save new value inputValue(setState)
handleChange = (e) => {
	e.preventDefault();
	console.log( 'handle change' + e.target.value);
	this.setState({inputValue: e.target.value})
}

//when enter form - send data in List -> task
handleSubmit = (e) => {
	e.preventDefault();
	const newTodo = {
		valueArrayTodos: this.state.inputValue,
		done: false
	};

	const todos = this.state.todos;
	todos.push(newTodo);
	console.log(todos);
	this.setState({ todos, inputValue: ''})

}

handleClick = (index) => {
	// console.log('handleclick change checkbox', index);
	const checkbox = this.state.todos;
	checkbox[index].done = !checkbox[index].done;
	console.log(checkbox[index]);
	this.setState({checkbox});
}

editData = (item, index) => {

	this.state.inputValue = item.valueArrayTodos; 

	const change = this.state.todos;
	change.splice(index, 1);
	this.setState({change});
	console.log(change[index]);
	
}


deleteData = (index) => {

	const del = this.state.todos;
	del.splice(index, 1);
	console.log(del);
	this.setState({del});
}

handleAdd=(e) => {
	e.preventDefault();

	const newTodo = {
		valueArrayTodos: this.state.inputValue

	};
	const addArray = this.state.todos;
	addArray.push(newTodo);
	this.setState({addArray, inputValue: ''})
}
render() {
	return (
		<div className="App">
		App
		<Form
		handleSubmit = {this.handleSubmit}
		handleChange={this.handleChange}
		inputFormValue = {this.state.inputValue}
		handleAdd={this.handleAdd}
		/>
		<List 
		editData={this.editData}
		handleClick={this.handleClick}
		todosListMap={this.state.todos}
		deleteData={this.deleteData}
		/>
		</div>	
		);
	}
}

export default App;













// методы - где зранится информация
// App js
// handleAddTodo = todo => {

// }

// add todo new todo 
// class внутри 
// атрибуты - disabled (boolean)
// стили - (boolean) - disabled - true add css class(disabled) : (false)

// edit 1change button
// edit - show disabled = true

// todo.disabled && <button> edit </button>

// jsx - html js
// { } - в фигурных скобках

// let todos = {...this.state.todos} - create new array
// todo[index] = todo;
// this.setState(todos)

// при нажатии на кнопку - disable меняет - true = false(toggle)

// state - value, 

// напрямую обновить - там где зраню данные

// state full
// state less
