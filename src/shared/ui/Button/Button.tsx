//@ts-nocheck
import { JSX } from "solid-js/h/jsx-runtime";
import style from "./style.module.css";
import { A } from "@solidjs/router";

type Props = {
  label: string;
  onClick?: () => void;
  icon?: JSX.Element;
  class?: string;
  link?: boolean;
  href?: string;
  type: "submit" | "button" | "reset";
  variant: "primary" | "secondary" | "text" | "premium";
  iconPosition?: "after";
  external?: boolean;
};

export const Button = (props: Props) => {
  if (props.link == true) {
    return !props.external ? (
      <A class={style.btn + " " + style[props.variant]} href={props.href}>
        {props.icon && <div class={style.icon}>{props.icon}</div>}
        {props.label}
      </A>
    ) : (
      <a class={style.btn + " " + style[props.variant]} href={props.href}>
        {props.icon && <div class={style.icon}>{props.icon}</div>}
        {props.label}
      </a>
    );
  }

  return (
    <button
      type={props.type}
      class={`${style.btn}  ${style[props.variant]}  ${props.class}`}
      onClick={props.onClick && props.onClick}
    >
      {props.icon && props.iconPosition !== "after" && (
        <div class={!props.class ? style.icon : ""}>{props.icon}</div>
      )}
      {props.label}{" "}
      {props.iconPosition == "after" && (
        <div class={!props.class ? style.icon : ""}>{props.icon}</div>
      )}{" "}
    </button>
  );
};
