import { useState } from "react";

import Header from "./Components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoalList from "./Components/CourseGoalList";

export default function App() {
	const [goal, setGoal] = useState<CourseGoal[]>([]);

	function handleAddGoal() {
		setGoal((goals) => {
			const newGoal: CourseGoal = {
				id: Math.random(),
				title: "Learn React using TypeScript.",
				description: "Dive deep into React and TypeScript",
			};
			return [...goals, newGoal];
		});
	}
	function handleDeleteGoal(id: number) {
		setGoal((goals) => goals.filter((goal) => goal.id !== id));
	}
	return (
		<main>
			<Header image={{ src: goalsImg, alt: "Course goal" }}>
				<h1>Coarse Goals</h1>
			</Header>
			<button onClick={handleAddGoal}>Add Goal</button>
			<CourseGoalList goals={goal} onDelete={handleDeleteGoal} />
		</main>
	);
}

//Types
export type CourseGoal = {
	id: number;
	title: string;
	description: string;
};
