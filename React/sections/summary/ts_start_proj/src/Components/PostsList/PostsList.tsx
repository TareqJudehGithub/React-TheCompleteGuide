import Post from "../Post/Post";
import styles from "./PostsList.module.css";

export default function PostsList() {
	return (
		<ul className={styles.posts}>
			<Post author="John" body="This is a sample post." />
			<Post author="Jane" body="This is another sample post." />
		</ul>
	);
}
