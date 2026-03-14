import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import { CORE_CONCEPTS } from "./data";

function App() {
	return (
		<>
			<Header />
			<Main />
		</>
	);
}
// Components

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
