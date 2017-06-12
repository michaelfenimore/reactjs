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

class Todo extends React.Component {
	render() {
		return (
			<div class="col-md-16">
				<Title />
				<input type="text" name="todo-item" />
			</div>
		)
	}
}

ReactDOM.render(
	<Todo />,
	document.getElementById('main')
);

registerServiceWorker();
