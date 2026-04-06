import styles from "./Post.module.css";

export default function Post({ author, body }: PostProps) {
	return (
		<li className={styles.post}>
			<p className={styles.author}>{author}</p>
			<p className={styles.text}>{body}</p>
		</li>
	);
}

export type PostProps = {
	author: string;
	body: string;
};
