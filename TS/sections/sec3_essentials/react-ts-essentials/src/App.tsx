import CoarseGoal from "./Components/CoarseGoal";
import Header from "./Components/Header";
import goalsImg from "./assets/goals.jpg";

export default function App() {
	return (
		<main>
			<Header image={{ src: goalsImg, alt: "Course goal" }}>
				<h1>Coarse Goals</h1>
			</Header>
			<CoarseGoal title="Learn TypeScript with React">
				<p>Build fullstack projects using React and Typescript</p>
			</CoarseGoal>
		</main>
	);
}
