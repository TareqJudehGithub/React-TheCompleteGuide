import Post from "../Post/Post";

// @ts-expect-error
import styles from "./PostsList.module.css";

export default function PostsList() {
	return (
		<ul className={styles.posts}>
			<Post author="John Smith" body="React is awesome!" />
			<Post author="Sarah Adams" body="I love programming!" />
		</ul>
	);
}
