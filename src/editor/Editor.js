import React, { Component } from 'react';
import * as marked from 'marked';
import './Editor.css';

export default class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Remember, be nice!',
			htmlState: '<p>Abc</p>',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSelection = this.handleSelection.bind(this);
		this.preview = this.preview.bind(this);
		this.makeBold = this.makeBold.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSelection() {
		console.log(window.getSelection().toString());
	}

	preview() {
		this.setState({ htmlState: marked(this.state.value) });
	}

    // TODO: Make theme yellow Falcon site color.

	makeBold() {
		this.setState({
			value: this.state.value.replace(
				window.getSelection().toString(),
				`**${window.getSelection().toString()}**`
			),
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.preview}>Show Output</button>
				<button onClick={this.makeBold}>bold</button>
				<div
					dangerouslySetInnerHTML={{ __html: this.state.htmlState }}
				></div>
				<textarea
					cols="100"
					rows="20"
					wrap="off"
					value={this.state.value}
					onChange={this.handleChange}
					onMouseUp={this.handleSelection}
				></textarea>
			</div>
		);
	}
}
