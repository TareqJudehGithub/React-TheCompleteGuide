import { useState } from "react";

import PostsList from "./Components/PostsList/PostsList";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
import NewPost from "./Components/NewPost/NewPost";

function App() {
	// States
	const [isModalVisible, setIsModalVisible] = useState(false);

	// Handles
	function handleToggleModal() {
		console.log(isModalVisible);
		setIsModalVisible((modal) => !modal);
	}
	return (
		<>
			<Header onCreatePost={handleToggleModal} />
			<main>
				<PostsList
					onModalToggle={handleToggleModal}
					isVisible={isModalVisible}
				/>
			</main>
		</>
	);
}

export default App;
