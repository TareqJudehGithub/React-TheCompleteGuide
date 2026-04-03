import { useState } from "react";

import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import Log from "./Components/Log";

function App() {
	// States
	const [activePlayer, setActivePlayer] = useState("X");
	const [gameTurns, setGameTurns] = useState([]);

	// Handles
	function handleSelectSquare(rowIndex, playerIndex) {
		// Toggle active player
		setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));

		// Log game turn
		// @ts-expect-error
		// setGameTurns(prevTurns => [...prevTurns, activePlayer]);

		// setGameTurns((prevTurns) => {
		// 	const updatedTurns = [...prevTurns, activePlayer];
		// 	console.log("Game Turns:", updatedTurns);
		// 	return updatedTurns;
		// });

		setGameTurns((prevTurns) => {
			let currentPlayer = "X";
			// @ts-expect-error
			// Check the last turn to determine the current player
			if (prevTurns.length > 0 && prevTurns[0].player === "X") {
				currentPlayer = "O";
			}
			const updatedTurns = [
				{ square: { row: rowIndex, col: playerIndex }, player: currentPlayer },
				...prevTurns,
			];
		});
	}
	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName="Player1"
						symbol="X"
						isActive={activePlayer === "X"}
					/>
					<Player
						initialName="Player2"
						symbol="O"
						isActive={activePlayer === "O"}
					/>
				</ol>
				<GameBoard OnSelectSquare={handleSelectSquare} turns={gameTurns} />
			</div>
			<Log />
		</main>
	);
}

export default App;
