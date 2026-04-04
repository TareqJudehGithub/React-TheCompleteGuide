import { useState } from "react";

import Post from "../Post/Post";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

// @ts-expect-error
import styles from "./PostsList.module.css";

// @ts-expect-error
export default function PostsList({ onModalToggle, isVisible }) {
	// States
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("");

	// Handles
	function handleBodyChange(e) {
		setBody(e.target.value);
	}
	function handleAuthorChange(e) {
		setAuthor(e.target.value);
	}

	return (
		<>
			{isVisible && (
				<Modal onToggleModal={onModalToggle}>
					<NewPost
						onBodyChange={handleBodyChange}
						onAuthorChange={handleAuthorChange}
					/>
				</Modal>
			)}
			<ul className={styles.posts}>
				<Post author={author} body={body} />
				<Post author="Sarah Adams" body="I love programming!" />
			</ul>
		</>
	);
}
