import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./Announcement.css";

export default class Announcement extends Component {
	render() {
		return (
			<div className={this.props.winner ? "visible" : "hidden"}>
				<h2>Gamer Over</h2>
			</div>
		);
	}
}
