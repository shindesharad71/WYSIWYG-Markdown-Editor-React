import React, { Component } from 'react';
import './Editor.css';

export default class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Remember, be nice!',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
	}

	handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSelection() {
        console.log(window.getSelection().toString());
    }

	render() {
		return (
			<textarea
				cols="100"
				rows="20"
				wrap="off"
				value={this.state.value}
                onChange={this.handleChange}
                onMouseUp={this.handleSelection}
			></textarea>
		);
	}
}
