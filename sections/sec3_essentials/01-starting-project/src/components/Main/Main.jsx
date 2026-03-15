import { useState } from "react";

import CoreConcept from "../CoreConcepts/CoreConcepts";
import TabButton from "../CoreConcepts/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "../../data";
import "./Main.css";

function Main() {
	const [selectedTopic, setSelectedTopic] = useState("");
	// @ts-expect-error
	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
		console.log(selectedTopic);
	}
	let tabContent = <p>Please select a topic</p>;
	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				{/* @ts-expect-error */}
				<h3>{EXAMPLES[selectedTopic].title}</h3>

				{/* @ts-expect-error */}
				<p>{EXAMPLES[selectedTopic].description}</p>

				<pre>
					{/* @ts-expect-error */}
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
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
					<TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
					<TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
					<TabButton onSelect={() => handleSelect("state")}>State</TabButton>
				</menu>
				{tabContent}
				{/* 
				ternary operator
			
				 {!selectedTopic ? (
					<p>Please select a topic</p>
				) : (
					<div id="tab-content">
						 @ts-expect-error 
						<h3>{EXAMPLES[selectedTopic].title}</h3>

						 @ts-expect-error 
						<p>{EXAMPLES[selectedTopic].description}</p>

						<pre>
							 @ts-expect-error 
							<code>{EXAMPLES[selectedTopic].code}</code>
						</pre>
					</div>
				)} 
				 */}
			</section>
		</main>
	);
}
export default Main;
