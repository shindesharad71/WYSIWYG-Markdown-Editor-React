import React, { Component } from 'react';
import './Editor.css';

export default class Editor extends Component {
	render() {
		return (
			<textarea id="editor"
				placeholder="Remember, be nice!"
				cols="100"
                rows="20"
                wrap="off"
			></textarea>
		);
	}
}
