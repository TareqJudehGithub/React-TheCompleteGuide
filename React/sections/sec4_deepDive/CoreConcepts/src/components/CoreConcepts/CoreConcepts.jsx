import CoreConcept from "./CoreConecpt";
import { CORE_CONCEPTS } from "../../data";
import Section from "./Section";
// Using object destructing
export default function CoreConcepts({}) {
	return (
		<Section id="core-concepts" title="Core Concepts">
			<ul>
				{CORE_CONCEPTS.map((conceptItem) => (
					<CoreConcept key={conceptItem.title} {...conceptItem} />
				))}
			</ul>

			{/* Or: 
					{CORE_CONCEPTS.map((conceptItem) => (
						<CoreConcept
							key={conceptItem.title}
							image={conceptItem.image}
							title={conceptItem.title}
							description={conceptItem.description}
						/>
					))} 
					*/}
		</Section>
	);
}
