// @ts-expect-error
import styles from "./Modal.module.css";

// @ts-expect-error
export default function Modal({ children }) {
	return (
		<>
			<div className={styles.backdrop}>
				<dialog className={styles.modal} open={true}>
					{children}
				</dialog>
			</div>
		</>
	);
}
