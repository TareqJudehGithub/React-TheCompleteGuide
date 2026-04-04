import { useState } from "react";

// @ts-expect-error
import styles from "./NewPost.module.css";

export default function NewPost({ onAuthorChange, onBodyChange }) {
	return (
		<form className={styles.form}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea
					id="body"
					rows={3}
					onChange={onBodyChange}
					required
					autoFocus
				></textarea>
			</p>
			<p>
				<label htmlFor="author">Author Name</label>
				<input type="text" id="author" onChange={onAuthorChange} required />
			</p>
			<button type="submit">Submit Post</button>
		</form>
	);
}
