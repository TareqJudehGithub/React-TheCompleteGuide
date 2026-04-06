import type { ReactNode } from "react";

import styles from "./Modal.module.css";

export default function Modal({ children }: ModalProps) {
	return (
		<div className={styles.backdrop}>
			<dialog className={styles.modal} open>
				{children}
			</dialog>
		</div>
	);
}

type ModalProps = {
	children: ReactNode;
};
