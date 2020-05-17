import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';
import './layout/style/main.css'
import MessagesList from './components/MessagesList.jsx'
class Messages extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [], text: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<div>
				<h3>Сообщения</h3>
				<MessagesList items={this.state.items} />
				<form onSubmit={this.handleSubmit}>
					<input						
						onChange={this.handleChange}
						value={this.state.text}
					/>
					<button>
						Add message
					</button>
				</form>
			</div>
		);
	}

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.text.length === 0) {
			return;
		}
		const newItem = {
			text: this.state.text,

		};
		this.setState(state => ({
			items: state.items.concat(newItem),
			text: ''
		}));
	}
}






ReactDOM.render(
	<Messages />,
	document.getElementById('app')
);