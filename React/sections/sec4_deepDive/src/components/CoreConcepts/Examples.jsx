import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../../data";

export default function Examples() {
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
		<>
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
		</>
	);
}
