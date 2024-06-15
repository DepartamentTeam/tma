//@ts-nocheck
import type { ReactNode } from "react";
import styles from "./checkbox.module.css";


type Props = {
	name: string;
	label?: string | ReactNode;
    onChange?: () => void;
};

export function Checkbox({ name, label, onChange }: Props) {
	return (
		<div className={styles.checkbox}>
			<input onChange={onChange} id={name} name={name} type="checkbox" />
			<label htmlFor={name}>{label}</label>
		</div>
	);
}
