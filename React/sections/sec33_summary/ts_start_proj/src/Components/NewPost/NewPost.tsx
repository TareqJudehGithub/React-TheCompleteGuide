import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";

import styles from "./NewPost.module.css";

export default function NewPost({ onCancel, onAddPost }: NewPostProps) {
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
	function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		const postData = {
			body: body,
			author: author,
		};
		onAddPost(postData);

		console.log(postData);
		onCancel();
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea
					id="body"
					rows={3}
					autoFocus
					onChange={handleBodyChange}
					required
				/>
			</p>
			<p>
				<label htmlFor="author">Author Name</label>
				<input
					type="text"
					id="author"
					required
					onChange={handleAuthorChange}
				/>
			</p>
			<p className={styles.actions}>
				<button type="button" onClick={onCancel}>
					Cancel
				</button>
				<button type="submit">Submit</button>
			</p>
		</form>
	);
}
type NewPostProps = {
	onCancel: () => void;
	onAddPost(newPost: { body: string; author: string }): void;
};
