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

		this.handleChange = this.handleChange.bind(this);
		this.handleSelection = this.handleSelection.bind(this);
		this.updatePreview = this.updatePreview.bind(this);
		this.makeBold = this.makeBold.bind(this);
	}

	componentDidMount() {
		this.updatePreview();
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
        this.updatePreview();
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="editor">
						<div className="toolbar">
                            <button onClick={this.makeBold}>B</button>
                            <button onClick={this.makeBold}>I</button>
                            <button onClick={this.makeBold}>U</button>
                            <button onClick={this.makeBold}>H1</button>
                            <button onClick={this.makeBold}>H2</button>
							<button onClick={this.makeBold}>H3</button>
							<button onClick={this.makeBold}>quote</button>
							<button onClick={this.makeBold}>Caps</button>
							<button onClick={this.makeBold}>Upper</button>
							<button onClick={this.makeBold}>lower</button>

						</div>
						<textarea
							cols="80"
							rows="20"
							wrap="hard"
							value={this.state.value}
							onChange={this.handleChange}
                            onMouseUp={this.handleSelection}
                            onKeyUp={this.updatePreview}
						></textarea>
					</div>
					<div
						className="preview"
						dangerouslySetInnerHTML={{
							__html: this.state.htmlState,
						}}
					></div>
				</div>
			</div>
		);
	}
}
