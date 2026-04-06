import { useState } from "react";

import PostsList from "./Components/PostsList/PostsList";
import Header from "./Components/Header/Header";

function App() {
	// States
	const [isModalVisible, setIsModalVisible] = useState(false);

	// Handles
	function handleToggleModal() {
		console.log(isModalVisible);
		setIsModalVisible((modal) => !modal);
	}
	function handleModal() {
		return isModalVisible;
	}
	return (
		<>
			<Header onCreatePost={handleToggleModal} />
			<main>
				<PostsList
					onModalToggle={handleToggleModal}
					isVisible={handleModal()}
				/>
			</main>
		</>
	);
}

export default App;
