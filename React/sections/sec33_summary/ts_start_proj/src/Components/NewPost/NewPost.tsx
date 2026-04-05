import type { ChangeEvent } from "react";
import styles from "./NewPost.module.css";

export default function NewPost({
	onAuthorChange,
	onBodyChange,
}: NewPostProps) {
	return (
		<form className={styles.form}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea
					id="body"
					rows={3}
					autoFocus
					onChange={onBodyChange}
					required
				/>
			</p>
			<p>
				<label htmlFor="author">Author Name</label>
				<input type="text" id="author" required onChange={onAuthorChange} />
			</p>
		</form>
	);
}
type NewPostProps = {
	onAuthorChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onBodyChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};
