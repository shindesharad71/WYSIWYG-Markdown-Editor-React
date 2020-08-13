import React, { Component } from 'react';
import * as marked from 'marked';
import './Editor.css';

export default class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '> # Do something awesome today...!',
			htmlState: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSelection = this.handleSelection.bind(this);
		this.updatePreview = this.updatePreview.bind(this);

		this.makeBold = this.makeBold.bind(this);
		this.makeItalic = this.makeItalic.bind(this);
		this.makeUnderline = this.makeUnderline.bind(this);
		this.makeH1 = this.makeH1.bind(this);
		this.makeH2 = this.makeH2.bind(this);
		this.makeH3 = this.makeH3.bind(this);
		this.makeQuote = this.makeQuote.bind(this);
		this.makeCaps = this.makeCaps.bind(this);
		this.makeUpper = this.makeUpper.bind(this);
		this.makeLower = this.makeLower.bind(this);
		this.makeHr = this.makeHr.bind(this);
		this.codeBlock = this.codeBlock.bind(this);
	}

	componentDidMount() {
		this.updatePreview();
	}

	handleChange(event) {
		this.setState({
			value: event.target.value,
			htmlState: marked(this.state.value),
		});
	}

	handleSelection() {
		console.log(window.getSelection().toString());
	}

	updatePreview() {
		const htmlState = marked(this.state.value);
		this.setState({ htmlState });
	}

	makeBold() {
		this.setState({
			value: this.state.value.replace(
				window.getSelection().toString(),
				`**${window.getSelection().toString()}**`
			),
		});
	}

	makeItalic() {
		this.setState({
			value: this.state.value.replace(
				window.getSelection().toString(),
				`_${window.getSelection().toString()}_`
			),
		});
	}

	makeUnderline() {
		this.setState({
			value: this.state.value.replace(
				window.getSelection().toString(),
				`<u>${window.getSelection().toString()}</u>`
			),
		});
	}

	makeH1() {
		this.setState({
			value: this.state.value.replace(
				window.getSelection().toString(),
				`# ${window.getSelection().toString()}`
			),
		});
	}

	makeH2() {
		this.setState({
			value: this.state.value.replace(
				window.getSelection().toString(),
				`## ${window.getSelection().toString()}`
			),
		});
	}

	makeH3() {
		this.setState({
			value: this.state.value.replace(
				window.getSelection().toString(),
				`### ${window.getSelection().toString()}`
			),
		});
	}

	makeQuote() {
		this.setState({
			value: this.state.value.replace(
				window.getSelection().toString(),
				`> ${window.getSelection().toString()}`
			),
		});
	}

	makeUpper() {
		this.setState({
			value: this.state.value.replace(
				window.getSelection().toString(),
				`${window.getSelection().toString().toUpperCase()}`
			),
		});
	}

	makeLower() {
		this.setState({
			value: this.state.value.replace(
				window.getSelection().toString(),
				`${window.getSelection().toString().toLowerCase()}`
			),
		});
	}

	makeCaps() {
		this.setState({
			value: this.state.value.replace(
				window.getSelection().toString(),
				`${window.getSelection().toString().toLowerCase()}`
			),
		});
	}

	makeHr() {
		this.setState({
			value: `${this.state.value}  ___`
		});
	}

	codeBlock() {
		this.setState({
			value: this.state.value.replace(
				window.getSelection().toString(),
				`${"```" + window.getSelection().toString() + "```"}`
			),
		});
	}

	// TODO: Make theme yellow Falcon site color.

	render() {
		return (
			<div>
				<div className="container">
					<div className="editor">
						<div className="toolbar btn-group">
							<button onClick={this.makeBold}>B</button>
							<button onClick={this.makeItalic}>I</button>
							<button onClick={this.makeUnderline}>U</button>
							<button onClick={this.makeH1}>H1</button>
							<button onClick={this.makeH2}>H2</button>
							<button onClick={this.makeH3}>H3</button>
							<button onClick={this.makeQuote}>quote</button>
							<button onClick={this.makeCaps}>Caps</button>
							<button onClick={this.makeUpper}>Upper</button>
							<button onClick={this.makeLower}>lower</button>
							<button onClick={this.makeHr}>---</button>
							<button onClick={this.codeBlock}>code</button>
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
