import React, { Component } from "react";
// import PropTypes from 'prop-types'
import "./Title.css";

export default class Title extends Component {
	titleClick(props) {
		props.updateBoard(props.loc, props.turn);
	}

	render() {
		return (
			<div
				className={"title " + this.props.loc}
				onClick={() => this.titleClick(this.props)}>
				<p>{this.props.value}</p>
			</div>
		);
	}
}
