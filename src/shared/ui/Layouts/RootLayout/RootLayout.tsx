//@ts-nocheck
import Head from "next/head";
import type { ReactNode } from "react";

type Props = {
	children?: ReactNode;
	title: string;
	className?: string;
};

export function RootLayout({ children, title, className }: Props) {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<div className={className}>
				
				{children}
			</div>
		</>
	);
}
