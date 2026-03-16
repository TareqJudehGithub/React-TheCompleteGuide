import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
	return (
		<>
			<Header />
			<Main />
			<ul>
				{DUMMY_TODOS.map((todo) => (
					<Todo todo={todo} />
				))}
			</ul>
		</>
	);
}
export default App;

const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];
// @ts-expect-error
function Todo({ todo }) {
	return <li>{todo}</li>;
}
