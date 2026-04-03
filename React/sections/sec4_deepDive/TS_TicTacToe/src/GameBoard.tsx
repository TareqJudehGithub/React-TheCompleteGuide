import { useState } from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({
	onSelectSquare,
	activePlayer,
}: GameBoardProps) {
	// States
	const [gameBoard, setGameBoard] =
		useState<(null[] | string[])[]>(initialGameBoard);
	// Handles
	function handleSelectSquare(rowIndex: number, playerIndex: number) {
		// @ts-expect-error
		setGameBoard((prevBoard) => {
			const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];

			updatedBoard[rowIndex][playerIndex] = activePlayer;

			return updatedBoard;
		});
		onSelectSquare();
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

type GameBoardProps = {
	onSelectSquare: () => void;
	activePlayer: string;
};
