import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';


class Title extends React.Component {
	render() {
		return (
			<h1>My Todo List</h1>
		)
	}
}

class Form extends React.Component {
	render() {
		return (
			<div class="todo-form">
				<input type="text" name="todo-item" size={25} maxLength={50} />
				<button type="button" onClick="">Add To List</button>
			</div>
		)
	}
}

class ToDoList extends React.Component {
	render() {
		return (
			<ul>
				<li></li>
			</ul>
		)
	}
}

class Todo extends React.Component {
	render() {
		return (
			<div class="col-md-16">
				<Title />
				<Form />
				<ToDoList />
			</div>
		)
	}
}

ReactDOM.render(
	<Todo />,
	document.getElementById('main')
);

registerServiceWorker();
