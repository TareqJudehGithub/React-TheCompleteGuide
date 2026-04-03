import Player from "./Player";
import GameBoard from "./GameBoard";
import { useState } from "react";
function App() {
	// States
	// Active Player state (X or O)
	const [activePlayer, setActivePlayer] = useState<string>("X");
	// Handles
	function handleSelectSquare() {
		// Toggle active player
		setActivePlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialState="Player1"
						symbol="X"
						isActive={activePlayer === "X"}
					/>
					<Player
						initialState="Player2"
						symbol="O"
						isActive={activePlayer === "O"}
					/>
				</ol>
				<GameBoard
					onSelectSquare={handleSelectSquare}
					activePlayer={activePlayer}
				/>
			</div>
			LOG
		</main>
	);
}
export default App;
