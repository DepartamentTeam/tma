//@ts-nocheck
import { JSXElement, type JSX } from "solid-js";
import styles from "./card.module.css";

type Props = {
  title: string | JSX.Element;
  color: "purple" | "blue" | "green" | "orange" | "light_blue";
  variant: "background" | "default";
  chip?: JSX.Element;
  body?: JSX.Element;
  backgroundColor?: string;
  img?: JSX.Element;
  class?: string
  actions?: JSX.Element
};

export function Card(props: Props) {
  return (
    <div
      style={{ "background-color": props.backgroundColor }}
      class={`${styles.card} ${styles[props.color]} ${props.class && props.class}`}
    >
      <div class={styles.container}>
        {props.img && props.img}

        <div class={styles.title}>{props.title}</div>
        {props.body && <div class={styles.body}>{props.body}</div>}

        {props.chip && props.chip}
        {props.actions && props.actions}
      </div>
      <div class={styles.bg}>
        {props.variant == "background" && (
          <svg
            width="191"
            height="173"
            viewBox="0 0 191 173"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M134.563 9.03056C138.68 16.3532 137.109 25.5684 130.799 31.1026L67.4466 86.6687L166.511 51.8079C174.692 48.929 183.748 52.4194 187.901 60.0519C192.053 67.6844 190.08 77.2104 183.239 82.552L114.631 136.121L162.776 131.047C172.494 130.023 181.2 137.094 182.221 146.84C183.243 156.586 176.192 165.317 166.474 166.341L56.7705 177.902C48.9149 178.73 41.4637 174.236 38.511 166.888C35.5583 159.541 37.8194 151.121 44.052 146.254L76.0958 121.234L-7.38449 150.611C-15.3857 153.427 -24.2538 150.154 -28.526 142.808C-32.7982 135.462 -31.2732 126.11 -24.8905 120.511L43.496 60.5302L-2.69311 75.2816C-12.004 78.2552 -21.9557 73.0962 -24.9208 63.7585C-27.8859 54.4208 -22.7416 44.4405 -13.4307 41.4668L113.783 0.838692C121.77 -1.71219 130.446 1.70795 134.563 9.03056Z"
            />
          </svg>
        )}
      </div>

    </div>
  );
}
