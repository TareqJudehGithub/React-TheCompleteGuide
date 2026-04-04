// @ts-expect-error
import styles from "./Modal.module.css";

// @ts-expect-error
export default function Modal({ children, onToggleModal }) {
	return (
		<>
			<div className={styles.backdrop} onClick={onToggleModal}>
				<dialog className={styles.modal} open={true}>
					{children}
				</dialog>
			</div>
		</>
	);
}
