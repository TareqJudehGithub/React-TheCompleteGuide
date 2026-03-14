import CoreConcept from "../CoreConcepts/CoreConcepts";
import { CORE_CONCEPTS } from "../../data";
import "./Main.css";
import TabButton from "../CoreConcepts/TabButton";
function Main() {
	// @ts-expect-error
	function handleSelect(selectedButton) {
		console.log(selectedButton);
	}
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
			<section id="examples">
				<h2>Examples</h2>
				<menu>
					<TabButton onSelect={() => handleSelect("components")}>
						Components
					</TabButton>
					<TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
					<TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
					<TabButton onSelect={() => handleSelect("State")}>State</TabButton>
				</menu>
			</section>
		</main>
	);
}

export default Main;
