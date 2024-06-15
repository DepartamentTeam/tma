//@ts-nocheck
import { ChevronDown, ChevronUp } from "@gravity-ui/icons";
import styles from "./select.module.css";
import { ChangeEvent, useRef, useState } from "react";

type Option = {
	label: string;
	value: string;
};

type Props = {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	name: string;
	id: string;
	label: string;
	options: Option[];
	value?: string;
	setter?: (value: any) => void;
};

export function Select({
	value,
	name,
	id,
	onChange,
	setter,
	label,
	options,
	placeholder,
}: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");
	const inputRef = useRef<HTMLInputElement | null>(null);

	function handleOpen() {
		!isOpen ? setIsOpen(true) : setIsOpen(false);
	}

	function handleSelect(option: Option) {
		inputRef.current!.value = option.value;
		if (setter) {
			setter && setter(option.value);
		}
		setSelectedOption(option.label);
		handleOpen();
	}

	function getValue() {


		if (value) { return options.filter((v) => v.value == value)[0].label; }   
	}

	return (
		<div className={styles.container}>
			<label htmlFor={name}>{label}</label>
			<button id={name} className={styles.select} onClick={handleOpen}>
				{selectedOption ? selectedOption : (value ? getValue()  : placeholder)  }
		
				{isOpen ? <ChevronDown /> : <ChevronUp />}
			</button>
			<div className={`${isOpen ? styles.open : styles.hidden} ${styles.menu}`}>
				{options.map((option, idx) => (
					<div
						onClick={() => handleSelect(option)}
						key={idx}
						className={styles.option}
						data-value={option.value}
					>
						{option.label}
					</div>
				))}
			</div>
			<input
				ref={inputRef}
				name={name}
				value={value}
				onChange={onChange}
				type="hidden"
			/>
		</div>
	);
}
