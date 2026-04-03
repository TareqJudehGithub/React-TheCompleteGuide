import { useState, type ChangeEvent } from "react";

export default function Player({
	initialState,
	symbol,
	isActive,
}: PlayerProps) {
	// State
	const [playerName, setPlayerName] = useState<string>(initialState);
	const [isEditing, setIsEditing] = useState<boolean>(false);

	// handle functions
	function handleEditButton(): void {
		if (!isEditing) {
			setPlayerName((player) => (player = ""));
		}
		return setIsEditing((s) => !s);
	}
	function handleName(e: ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		setPlayerName(e.target.value);
	}

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{isEditing ? (
					<input
						type="text"
						value={playerName}
						onChange={handleName}
						autoFocus
						placeholder="Edit Name..."
					/>
				) : (
					<span className="player-name">{playerName}</span>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditButton}>
				{isEditing ? <span>Save</span> : <span>Edit</span>}
			</button>
		</li>
	);
}

type PlayerProps = {
	initialState: string;
	symbol: string;
	isActive?: boolean;
};
