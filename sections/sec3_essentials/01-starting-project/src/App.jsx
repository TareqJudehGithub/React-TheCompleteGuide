// @ts-ignore
import reactImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Fundamentals", "Crucial", "Core"];
// @ts-ignore
function genRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}
function App() {
	return (
		<>
			<Header />
			<Main />
		</>
	);
}
// Components
function Header() {
	var description = reactDescriptions[genRandomInt(2)];
	return (
		<header>
			<img src={reactImage} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
}
function Main() {
	return (
		<main>
			<section id="core-concepts">
				<h2>Core Concepts</h2>
				<ul>
					<CoreConcept
						title={CORE_CONCEPTS[0].title}
						description={CORE_CONCEPTS[0].description}
						image={CORE_CONCEPTS[0].image}
					/>
					<CoreConcept {...CORE_CONCEPTS[1]} />

					<CoreConcept {...CORE_CONCEPTS[2]} />

					<CoreConcept {...CORE_CONCEPTS[3]} />
				</ul>
			</section>
		</main>
	);
}
// Using object destructing
//@ts-ignore
function CoreConcept({
	image,
	title,
	description = "Core Concept Description", // default value
}) {
	return (
		<li>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}
// Using props
// function CoreConcept(props) {
// 	return (
// 		<li>
// 			<img src={props.image} alt={props.title} />
// 			<h3>{props.title}</h3>
// 			<p>{props.description}</p>
// 		</li>
// 	);
// }

export default App;
