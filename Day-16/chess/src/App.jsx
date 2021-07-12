import React from 'react';
import './App.css';

function Square() {
	return (
		<div className="square">

		</div>
	)
}

function EightSquare() {
	return (
		<div className="eight-square">
			<Square/>
			<Square/>
			<Square/>
			<Square/>
			<Square/>
			<Square/>
			<Square/>
			<Square/>
		</div>
	)
}

function ChessBoard() {
	return (
		<div className="chess-board">
			<EightSquare/>
			<EightSquare/>
			<EightSquare/>
			<EightSquare/>
			<EightSquare/>
			<EightSquare/>
			<EightSquare/>
			<EightSquare/>
		</div>
	)
}

export default ChessBoard