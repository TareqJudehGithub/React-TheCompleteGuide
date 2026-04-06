import { useState } from "react";
import type { PostProps } from "../Post/Post";

import Post from "../Post/Post";
import Modal from "../Modal/Modal";
import NewPost from "../NewPost/NewPost";

import styles from "./PostsList.module.css";

export default function PostsList({
	isVisible,
	onModalToggle,
}: PostsListProps) {
	// States

	const [posts, setPosts] = useState<PostProps[]>([]);

	// Handlers
	function handleAddPost(newPost: PostProps) {
		setPosts((posts) => [newPost, ...posts]);
	}
	return (
		<>
			{isVisible && (
				<Modal>
					<NewPost onCancel={onModalToggle} onAddPost={handleAddPost} />
				</Modal>
			)}
			<ul className={styles.posts}>
				{posts.map((post) => (
					<Post key={post.body} author={post.author} body={post.body} />
				))}
			</ul>
		</>
	);
}

type PostsListProps = {
	onModalToggle: () => void;
	isVisible?: boolean;
};
