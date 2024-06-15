//@ts-nocheck
import styles from "./banner.module.css";
import type { ReactNode } from "react";

type Props = {
	topSubtitle?: string | ReactNode;
	title: string;
	subtitle?: string;
	className?: string;
    backgroundImage?: ReactNode | string;
    backgroundColor: "blue-100" | "default" | string;
};

export default function Banner({
	topSubtitle,
	title,
	subtitle,
	className,
    backgroundImage,
    backgroundColor
}: Props) {
	return <div

    style={{backgroundImage: typeof backgroundImage == "string" ? `url(${backgroundImage})` : "none", backgroundColor: backgroundColor}}
    className={`${className} ${styles.container} ${styles[backgroundColor]}`}>
        <div className={`${styles.body}`}>
        <div className={styles.title}>
            <p className="h5 blue">{topSubtitle}</p>
            <h1>{title}</h1>
            <p className="h5 blue">{subtitle}</p>
        </div>
        </div>
        {typeof backgroundImage != "string" ? backgroundImage : null }
    </div>;
}
