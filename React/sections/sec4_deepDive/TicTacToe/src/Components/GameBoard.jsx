import { useState } from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard() {
	// States
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// Handles
	// @ts-expect-error
	function handleSelectSquare(rowIndex, playerIndex) {
		setGameBoard((prevGameBoard) => {
			const updatedGameBoard = [
				...prevGameBoard.map((innerArray) => [...innerArray]),
			];
			// @ts-expect-error
			updatedGameBoard[rowIndex][playerIndex] = "X";
			return updatedGameBoard;
		});
	}

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, playerIndex) => (
							<li key={playerIndex}>
								<button
									onClick={() => handleSelectSquare(rowIndex, playerIndex)}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
