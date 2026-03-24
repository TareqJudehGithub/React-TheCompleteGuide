import { type ReactNode } from "react";

export default function CoarseGoal(props: CoarseGoalProps) {
	return (
		<article>
			<div>
				<h2>{props.title}</h2>
				<p>{props.children}</p>
			</div>
			<button>Delete</button>
		</article>
	);
}

type CoarseGoalProps = {
	title: string;
	children: ReactNode;
};
