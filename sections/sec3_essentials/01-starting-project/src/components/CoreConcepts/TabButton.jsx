// @ts-expect-error
export default function TabButton({ children }) {
	return (
		<li>
			<button>{children}</button>
		</li>
	);
}
