import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";

function App() {
	return (
		<main>
			<div id="game-container">
				<ol id="players">
					<Player initialName="Player1" symbol="X" />
					<Player initialName="Player2" symbol="O" />
				</ol>
				<GameBoard />
			</div>
			LOG
		</main>
	);
}
export default App;
