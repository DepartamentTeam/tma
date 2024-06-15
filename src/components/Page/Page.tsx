//@ts-nocheck
import { Suspense, lazy, type Component } from "solid-js";
import { type JSX } from "solid-js/h/jsx-runtime";
import style from "./style.module.css";
import { Navbar } from "../Navbar/Navbar";

type Props = {
  children: JSX.Element | Component;
  actions?: JSX.Element | Component;
  class?: string;
};

const LazyNavbar = lazy(() => import("../Navbar/Navbar"));

export const Page = (props: Props) => {
  return (
    <>
      <div class={style.layout}>
        <Suspense fallback={<span>Fallback</span>}>
          <LazyNavbar />
        </Suspense>
        <div class={`${style.body}  ${props.class && props.class}`}>
          {props.children}{" "}
        </div>
        {props.actions ? <div class={style.main}>{props.actions}</div> : <></>}
      </div>
    </>
  );
};
