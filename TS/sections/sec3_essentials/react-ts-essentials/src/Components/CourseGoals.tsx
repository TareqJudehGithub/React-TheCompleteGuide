import { type ReactNode } from "react";

export default function CoarseGoals(props: CourseGoalProps) {
	return (
		<article>
			<div>
				<h2>{props.title}</h2>
				<p>{props.children}</p>
			</div>
			<button onClick={() => props.onDelete(props.id)}>Delete</button>
		</article>
	);
}

type CourseGoalProps = {
	id: number;
	title: string;
	onDelete: (id: number) => void;
	children: ReactNode;
};
