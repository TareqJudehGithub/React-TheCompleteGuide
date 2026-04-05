import { useState } from "react";
import Header from "./Components/Header/Header";
import PostsList from "./Components/PostsList/PostsList";

function App() {
	// States
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	// Handlers
	function handleToggleModal() {
		console.log("Creating a new post!");
		setIsModalVisible((modal) => !modal);
	}
	function handleModalState() {
		return isModalVisible;
	}
	return (
		<main>
			<Header onCreatePost={handleToggleModal} />
			<PostsList
				onModalToggle={handleToggleModal}
				isVisible={handleModalState()}
			/>
		</main>
	);
}

export default App;
