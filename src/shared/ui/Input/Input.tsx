
import { JSX } from "solid-js/jsx-runtime";
import styles from "./input.module.css";

type Props = {
	type: "email" | "password" | "text" | "number";
	label: string;
	placeholder: string;
	autoComplete:
		| "given-name"
		| "lastName"
		| "off"
		| "on"
		| "new-password"
		| "current-password"
		| "email"
		| "password";
	helperButton?: JSX.Element;
	handler?: () => void;
	name: string;
	onChange?: (e: Event) => void;
	className?: string;
	min?: number;
	max?: number;
	value?: string | number | undefined;
	required?: boolean;
	onError?: () => {};
	error?: Error;
	state?: "loading" | "default" | "error" | "ok"
	icon?: JSX.Element

};

/**
 * Input component.
 * @constructor
 * @param {string} type - The title of the input.
 * @param {string} label - The label of the input.
 * @param {string} placeholder - The placeholder of the input.
 * @param {string} autoComplete - The type of the input auto complete. See the MDN reference https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
 */
export function Input(props : Props) {
	return (
		<>
		  <div class={`${styles.container} `}>
			<label class="text__small-3 text__bold">
				<span>{props.label} {props.required && "*"}</span>
				{props.icon && <div class={styles.icon}>{props.icon}</div>}
				<input
					required={props.required}
					value={props.value ? props.value : ""}
					// min={min}
					// max={max}
					onChange={props.onChange}
					name={props.name}
					autocomplete={props.autoComplete}
					placeholder={props.placeholder}
					class={`${styles.input} ${props.className}`}
					type={props.type}
				/>
				{props.helperButton && <div class={styles.helper}>{props.helperButton}</div>}
			</label>
			{/* {error?.state && <span>{error.message}</span>} */}
		</div>
		
		</>
	);
}
