import styles from "./chip.module.css";

type Props = {
	label: string;
	theme: "primary" | "accent" | "error";
	variant: "outlined" | "filled"
	size?: "sm" | "md"
};

export function Chip(props: Props) {
	return (
		<div class={`${styles.__container}
		${styles[props.size]}
		${styles[props.theme]} ${styles[props.variant]}`}>
			{props.label}
		</div>
	);
}
