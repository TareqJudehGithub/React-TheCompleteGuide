// @ts-expect-error
import styles from "./Post.module.css";

// @ts-expect-error
export default function Post({ author, body }) {
	return (
		<li className={styles.post}>
			<p className={styles.author}>{author}</p>
			<p className={styles.text}>{body}</p>
		</li>
	);
}
