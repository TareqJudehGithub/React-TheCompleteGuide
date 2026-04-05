import type { ReactNode } from "react";

import styles from "./Modal.module.css";

export default function Modal({ children, onToggleModal }: ModalProps) {
	return (
		<div className={styles.backdrop} onClick={onToggleModal}>
			<dialog className={styles.modal} open>
				{children}
			</dialog>
		</div>
	);
}

type ModalProps = {
	children: ReactNode;
	onToggleModal: () => void;
};
