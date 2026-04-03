import { useState } from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard() {
	// States
	const [gameBoard, setGameBoard] =
		useState<(null[] | string[])[]>(initialGameBoard);
	// Handles
	function handleSelectSquare(rowIndex: number, playerIndex: number) {
		setGameBoard((prevBoard) => {
			// Remove the explicit type annotation; let TypeScript infer it
			const updatedBoard = [
				...prevBoard.map((innerArray) => [...innerArray]), // innerArray is now correctly typed as null[] | string[]
			];

			updatedBoard[rowIndex][playerIndex] = "X";

			return updatedBoard;
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
