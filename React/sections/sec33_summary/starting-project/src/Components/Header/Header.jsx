import { MdPostAdd, MdMessage } from "react-icons/md";
// @ts-expect-error
import styles from "./Header.module.css";

// @ts-expect-error
export default function Header({ onCreatePost }) {
	return (
		<header className={styles.header}>
			<h1 className={styles.logo}>
				<MdMessage />
				React Poster
			</h1>
			<p>
				<button className={styles.button} onClick={onCreatePost}>
					<MdPostAdd size={18} />
					New Post
				</button>
			</p>
		</header>
	);
}
