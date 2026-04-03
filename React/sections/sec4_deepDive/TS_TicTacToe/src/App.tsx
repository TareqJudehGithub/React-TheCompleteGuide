import Player from "./Player";
import GameBoard from "./GameBoard";
function App() {
	return (
		<main>
			<div id="game-container">
				<ol id="players">
					<Player initialState="Player1" symbol="X" />
					<Player initialState="Player2" symbol="O" />
				</ol>
				<GameBoard />
			</div>
			LOG
		</main>
	);
}
export default App;
