import type { SubmitEvent } from "react";
import { useRef } from "react";

export default function NewGoal(props: NewGoalProps) {
	const goal = useRef<HTMLInputElement>(null);
	const summary = useRef<HTMLInputElement>(null);

	function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		// ! means this value will never be null.
		const enteredGoal = goal.current!.value;
		const enteredSummary = summary.current!.value;

		// Reset current form inputs
		e.currentTarget.reset();

		props.onAddGoal(enteredGoal, enteredSummary);

		// One approach to extract input values is using FormData.
		// new FormData(e.currentTarget);
	}
	return (
		<form onSubmit={handleSubmit}>
			<p>
				<label htmlFor="goal">Your Goal</label>
				<input
					id="goal"
					type="text"
					placeholder="Enter a goal"
					autoFocus
					ref={goal}
				/>
			</p>

			<p>
				<label htmlFor="summary">Goal Summary</label>
				<input
					id="summary"
					type="text"
					placeholder="Goal summary"
					ref={summary}
				/>
			</p>
			<p>
				<button>Add Goal</button>
			</p>
		</form>
	);
}

type NewGoalProps = {
	onAddGoal: (goalTitle: string, goalSummary: string) => void;
};
