import { useState } from "react";
// @ts-expect-error
export default function Player({ initialName, symbol }) {
	// States
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	// handle functions
	function handleEdit() {
		return setIsEditing((s) => !s);
	}
	// @ts-expect-error
	function handleNameChange(e) {
		setPlayerName(e.target.value);
	}
	return (
		<li>
			<span className="player">
				{isEditing ? (
					<input
						type="text"
						placeholder="Edit name.."
						value={playerName}
						onChange={handleNameChange}
						autoFocus
					/>
				) : (
					<span className="player-name">{playerName}</span>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEdit}>
				{isEditing ? <span>Save</span> : <span>Edit</span>}
			</button>
		</li>
	);
}
