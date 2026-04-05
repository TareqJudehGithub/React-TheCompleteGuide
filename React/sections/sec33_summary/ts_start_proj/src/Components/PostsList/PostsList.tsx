import { useState } from "react";
import type { ChangeEvent } from "react";

import Post from "../Post/Post";
import Modal from "../Modal/Modal";
import NewPost from "../NewPost/NewPost";

import styles from "./PostsList.module.css";

export default function PostsList({
	onModalToggle,
	isVisible,
}: PostsListProps) {
	// States
	const [author, setAuthor] = useState<string>("");
	const [body, setBody] = useState<string>("");

	// Handlers
	function handleAuthorChange(e: ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		setAuthor(e.target.value);
	}
	function handleBodyChange(e: ChangeEvent<HTMLTextAreaElement>) {
		e.preventDefault();
		setBody(e.target.value);
	}

	return (
		<>
			{isVisible && (
				<Modal onToggleModal={onModalToggle}>
					<NewPost
						onAuthorChange={handleAuthorChange}
						onBodyChange={handleBodyChange}
					/>
				</Modal>
			)}
			<ul className={styles.posts}>
				<Post author={author} body={body} />
				<Post author="Jane" body="This is another sample post." />
			</ul>
		</>
	);
}

type PostsListProps = {
	onModalToggle: () => void;
	isVisible?: boolean;
};
