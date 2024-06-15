//@ts-nocheck
import type { ChangeEvent, ReactNode } from "react";
import style from "./group.module.css";

type Child = {
    element: ReactNode;
	name: string;
	value: string;
};

type Props = {
	name: string;
    className?: string;
	inputs: Child[];
	currentValue?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function RadioGroup({ name, inputs, className, currentValue, onChange }: Props) {
	return (

		<fieldset className={className}   name={name}>
			{inputs.map((input, idx) => (
				<label key={idx} className={style.label}>
					{input.element}{" "}
					<input type="radio" onChange={onChange} checked={input.value == currentValue ? true : false}  hidden name={input.name} value={input.value} />
				</label>
			))}
		</fieldset>
	);
}
