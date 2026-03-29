import { useState } from "react";

import Header from "./Components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoalList from "./Components/CourseGoalList";
import NewGoal from "./Components/NewGoal";

export default function App() {
	const [goal, setGoal] = useState<CourseGoal[]>([]);

	function handleAddGoal(goal: string, summary: string) {
		setGoal((goals) => {
			const newGoal: CourseGoal = {
				id: Math.random(),
				title: goal,
				description: summary,
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
			<NewGoal onAddGoal={handleAddGoal} />
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
