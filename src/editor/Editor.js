import React, { Component } from 'react';

export default class Editor extends Component {
	render() {
		return (
			<textarea
				placeholder="Remember, be nice!"
				cols="100"
                rows="20"
                wrap="off"
			></textarea>
		);
	}
}
