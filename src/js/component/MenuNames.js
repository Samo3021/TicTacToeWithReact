import React from "react";
// import PropTypes from 'prop-types'
import Announcement from "./Announcement.js";
import ResetButton from "./ResetButton.js";
import Title from "./Title.js";

export default class MenuNames extends React.Component {
	constructor() {
		super();
		this.state = {
			gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			turn: "x",
			winner: null
		};
	}
	//columanas
	updateBoard(loc, player) {
		if (
			this.state.gameBoard[loc] === "x" ||
			this.state.gameBoard[loc] === "o" || this.state.winner
		) {
			//invalid move
			return;
		}
		let currenteGameBoard = this.state.gameBoard;
		currenteGameBoard.splice(loc, 1, this.state.turn);
		this.setState({ gameBoard: currenteGameBoard });
		let topRow =
			this.state.gameBoard[0] +
			this.state.gameBoard[1] +
			this.state.gameBoard[2];
		if (topRow.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let middleRow =
			this.state.gameBoard[3] +
			this.state.gameBoard[4] +
			this.state.gameBoard[5];
		if (middleRow.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let bottomRow =
			this.state.gameBoard[6] +
			this.state.gameBoard[7] +
			this.state.gameBoard[8];
		if (bottomRow.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let leftCol =
			this.state.gameBoard[0] +
			this.state.gameBoard[3] +
			this.state.gameBoard[6];
		if (leftCol.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let middleCol =
			this.state.gameBoard[1] +
			this.state.gameBoard[4] +
			this.state.gameBoard[7];
		if (middleCol.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let rightCol =
			this.state.gameBoard[2] +
			this.state.gameBoard[5] +
			this.state.gameBoard[8];
		if (rightCol.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let leftDiag =
			this.state.gameBoard[0] +
			this.state.gameBoard[4] +
			this.state.gameBoard[8];
		if (leftDiag.match(/"xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let rightDiag =
			this.state.gameBoard[2] +
			this.state.gameBoard[4] +
			this.state.gameBoard[6];
		if (rightDiag.match(/xxx | ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let moves = this.state.gameBoard.join("").replace(/ /, " ");
		if (moves.length === 9) {
			this.setState({ winner: "d" });
		}
		this.setState({ turn: this.state.turn === "x" ? "o" : "x" });
	}
	resetBoard() {
		this.setState({
			gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			turn: "x",
			winner: null
		});
	}

	render() {
		return (
			<div className="container ">
				<div className="menu">
					<h1>Tic-Tac-Toe</h1>
					<Announcement winner={this.state.winner} />
					<ResetButton reset={this.resetBoard.bind(this)} />
				</div>
				{this.state.gameBoard.map(
					function(value, i) {
						return (
							<Title
								key={i}
								Loc={i}
								value={value}
								updateBoard={this.updateBoard.bind(this)}
								turn={this.state.turn}
							/>
						);
					}.bind(this)
				)}
			</div>
		);
	}
}
