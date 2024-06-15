import style from "./style.module.css";

type Props = {
  src?: string;
  firstname?: string;

  size: "sm" | "md" | "lg"
};

const Avatar = (props: Props) => {
  return (
    <div class={`${style.container} ${style[props.size]}`}>
      {props.src ? (
        <img src={props.src} />
      ) : (
        <div>
          {props.firstname[0]}</div>
      )}
    </div>
  );
};

export default Avatar