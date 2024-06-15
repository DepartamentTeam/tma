import {type JSX, createSignal} from "solid-js"

import styles from "./segments.module.css";

type Tab = {
    id: number;
	title: string | JSX.Element;
	badge?: boolean; 
	body: JSX.Element;
	
};

type Props = {
	tabs: Tab[];
	className?: string;
};

export function Segments({ tabs, className }: Props) {

	const [tabId, setTabId] = createSignal(0);

	function handleSetTabId(id: number) {
		setTabId(id);
	}

	return (
		<>
			<div class={`${styles.controls} ${className && className}`}>
				{tabs.map((tab) => (
					
					<button class={tabId() == tab.id ? `${styles.active} ${styles.control}` : styles.control}
					 onClick={() => handleSetTabId(tab.id)}
					>{tab.title} {tab.badge && <span class={styles.badge}>  </span>} </button>
				))}
			</div>

			{tabs[tabId()].body}
		</>
	);
}
