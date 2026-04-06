import { useState } from "react";

import Modal from "../Modal/Modal";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";

// @ts-expect-error
import styles from "./PostsList.module.css";

// @ts-expect-error
export default function PostsList({ onModalToggle, isVisible }) {
	// States
	const [posts, setPosts] = useState([]);

	// Handlers

	// add new post to the list of posts
	// @ts-expect-error
	function handleAddPost(newPost) {
		// @ts-expect-error
		setPosts((posts) => [newPost, ...posts]);
	}
	return (
		<>
			{isVisible && (
				<Modal>
					<NewPost onCancel={onModalToggle} onAddPost={handleAddPost} />
				</Modal>
			)}
			{posts.length > 0 && (
				<ul className={styles.posts}>
					{posts.map((post) => (
						<Post
							// @ts-expect-error
							key={post.body}
							// @ts-expect-error
							author={post.author}
							// @ts-expect-error
							body={post.body}
						/>
					))}
				</ul>
			)}
			{posts.length === 0 && (
				<div style={{ textAlign: "center", color: "white" }}>
					<h2>There are no posts yet.</h2>
					<p>Start adding some!</p>
				</div>
			)}
		</>
	);
}
