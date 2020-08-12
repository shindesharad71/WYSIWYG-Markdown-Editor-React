import React, { Component } from 'react';
import * as marked from 'marked';
import './Editor.css';

export default class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '_Are you **winning** son...?_',
			htmlState: '',
        };
        
        this.updatePreview();

		this.handleChange = this.handleChange.bind(this);
		this.handleSelection = this.handleSelection.bind(this);
		this.updatePreview = this.updatePreview.bind(this);
		this.makeBold = this.makeBold.bind(this);
	}

	handleChange(event) {
        this.setState({ value: event.target.value });
        this.updatePreview();
	}

	handleSelection() {
		console.log(window.getSelection().toString());
	}

	updatePreview() {
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
				<button onClick={this.makeBold}>bold</button>
				<div class="container">
					<textarea
						cols="100"
						rows="20"
						wrap="off"
						value={this.state.value}
						onChange={this.handleChange}
						onMouseUp={this.handleSelection}
					></textarea>
					<div
						class="output"
						dangerouslySetInnerHTML={{
							__html: this.state.htmlState,
						}}
					></div>
				</div>
			</div>
		);
	}
}
