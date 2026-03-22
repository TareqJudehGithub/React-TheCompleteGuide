import CoreConcept from "./CoreConecpt";
import { CORE_CONCEPTS } from "../../data";
// Using object destructing
export default function CoreConcepts({}) {
	return (
		<>
			<h2>Core Concepts</h2>
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
		</>
	);
}
