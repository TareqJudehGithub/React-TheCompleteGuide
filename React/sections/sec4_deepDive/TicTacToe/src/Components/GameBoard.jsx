const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
// @ts-expect-error
export default function GameBoard({ OnSelectSquare, turns }) {
	let gameBoard = initialGameBoard;

	for (const turn of turns) {
		const { square, player } = turn;
		const { row, col } = square;
		// Update the game board with the player's move
		gameBoard[row][col] = player;
	}

	// States
	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// Handles

	// function handleSelectSquare(rowIndex, playerIndex) {
	// 	setGameBoard((prevGameBoard) => {
	// 		const updatedGameBoard = [
	// 			...prevGameBoard.map((innerArray) => [...innerArray]),
	// 		];
	// 		updatedGameBoard[rowIndex][playerIndex] = activePlayerSymbol;
	// 		return updatedGameBoard;
	// 	});

	// 	OnSelectSquare();
	// }

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, playerIndex) => (
							<li key={playerIndex}>
								<button onClick={() => OnSelectSquare(rowIndex, playerIndex)}>
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
