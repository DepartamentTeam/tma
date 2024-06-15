//@ts-nocheck
import styles from "./switch.module.css";
import type { ChangeEvent } from "react";

type Props = {
	name: string;
	label: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	checked?: boolean;
};

export function Switch({ name, label, onChange, checked}: Props) {
	
	return (
		<div className={styles.container}>
			<div className={styles.box}>
			<input id={name}
			checked={checked? checked: false}
			onChange={onChange} className={styles.base} type="checkbox" name={name} />
            <span className={styles.ellipse}></span>
			</div>
			<label htmlFor={name}>{label}</label>
		</div>
	);
}
