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
					{CORE_CONCEPTS.map((conceptItem) => (
						<CoreConcept key={conceptItem.title} {...conceptItem} />
					))}

					{/* Or: */}
					{/* {CORE_CONCEPTS.map((conceptItem) => (
						<CoreConcept
							key={conceptItem.title}
							image={conceptItem.image}
							title={conceptItem.title}
							description={conceptItem.description}
						/>
					))} */}
				</ul>
			</section>
			<section id="examples">
				<h2>Examples</h2>
				<menu>
					<TabButton
						onSelect={() => handleSelect("components")}
						isSelected={selectedTopic === "components"}
					>
						Components
					</TabButton>
					<TabButton
						onSelect={() => handleSelect("jsx")}
						isSelected={selectedTopic === "jsx"}
					>
						JSX
					</TabButton>
					<TabButton
						onSelect={() => handleSelect("props")}
						isSelected={selectedTopic === "props"}
					>
						Props
					</TabButton>
					<TabButton
						onSelect={() => handleSelect("state")}
						isSelected={selectedTopic === "state"}
					>
						State
					</TabButton>
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
