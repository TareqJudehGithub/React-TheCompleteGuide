1; // Using object destructing
export default function CoreConcept({
	//@ts-ignore
	image,
	//@ts-ignore
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
