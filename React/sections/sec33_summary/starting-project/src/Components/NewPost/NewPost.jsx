import { useState } from "react";

// @ts-expect-error
import styles from "./NewPost.module.css";

// @ts-expect-error
export default function NewPost({ onCancel, onAddPost }) {
	// States
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("");

	// Handles
	// @ts-expect-error
	function handleBodyChange(e) {
		setBody(e.target.value);
	}
	// @ts-expect-error
	function handleAuthorChange(e) {
		setAuthor(e.target.value);
	}
	// @ts-expect-error
	function handleSubmit(e) {
		e.preventDefault();

		const postData = {
			body: body,
			author: author,
		};
		onAddPost(postData);

		// Close the modal
		onCancel();
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea
					id="body"
					rows={3}
					onChange={handleBodyChange}
					required
					autoFocus
				></textarea>
			</p>
			<p>
				<label htmlFor="author">Author Name</label>
				<input
					type="text"
					id="author"
					onChange={handleAuthorChange}
					required
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
