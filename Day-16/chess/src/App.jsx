import React from 'react';
import './App.css';

function ChessBoard() {
	let boxes = []
	for(let i = 0; i < 8; i++) {
		boxes.push(<div className="square"/>)
	}

	return (
		<div className="App">
			<div className="chessBoard">
				<div className="row">{boxes}</div>
				<div className="row">{boxes}</div>
				<div className="row">{boxes}</div>
				<div className="row">{boxes}</div>
				<div className="row">{boxes}</div>
				<div className="row">{boxes}</div>
				<div className="row">{boxes}</div>
				<div className="row">{boxes}</div>
			</div>
		</div>
	)
}

export default ChessBoard