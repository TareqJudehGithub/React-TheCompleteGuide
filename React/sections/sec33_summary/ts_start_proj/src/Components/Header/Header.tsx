import { MdPostAdd, MdMessage } from "react-icons/md";
import styles from "./Header.module.css";

export default function Header({ onCreatePost }: HeaderProps) {
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

type HeaderProps = {
	onCreatePost: () => void;
};
