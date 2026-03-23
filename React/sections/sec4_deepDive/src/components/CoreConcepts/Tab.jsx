// @ts-expect-error
export default function Tab({ children, buttons, ButtonsContainer = "menu" }) {
	// const ButtonsContainer = ButtonsContainer;
	return (
		<>
			{/* @ts-expect-error */}
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
}
