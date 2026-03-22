import CoreConcepts from "../CoreConcepts/CoreConcepts";
import Examples from "../CoreConcepts/Examples";
import "./Main.css";

function Main() {
	return (
		<main>
			<section id="core-concepts">
				<CoreConcepts />
			</section>

			<section id="examples">
				<Examples />
			</section>
		</main>
	);
}
export default Main;
