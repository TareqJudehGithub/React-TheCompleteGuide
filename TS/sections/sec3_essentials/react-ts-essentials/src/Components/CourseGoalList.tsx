import CoarseGoals from "./CourseGoals";
import type { CourseGoal } from "../App.tsx";

export default function CourseGoalList({
	goals,
	onDelete,
}: CourseGoalListProps) {
	return (
		<ul>
			{goals.map((goal) => (
				<li key={goal.id}>
					<CoarseGoals id={goal.id} title={goal.title} onDelete={onDelete}>
						{goal.description}
					</CoarseGoals>
				</li>
			))}
		</ul>
	);
}
type CourseGoalListProps = {
	goals: CourseGoal[];
	onDelete: (id: number) => void;
};
