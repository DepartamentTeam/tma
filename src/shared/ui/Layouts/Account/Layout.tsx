//@ts-nocheck
import Head from "next/head";
import type { ReactNode } from "react";
import Logo from "@/shared/ui/Logo/Logo";

type Props = {
    children: ReactNode
    title: string
}

export default function Layout({children, title} : Props) {

    return (
        <>
        <Head>
            <title>{title}</title>
        </Head>
       
        <div className="account__layout">
        <Logo className="account__logo"/>
        {children}
        </div>
        </>
    );
    
}

export async function getStaticProps(context) {
	return {
	  props: {
		// You can get the messages from anywhere you like. The recommended
		// pattern is to put them in JSON files separated by locale and read
		// the desired one based on the `locale` received from Next.js.
		messages: (await import(`@/shared/i18n/locales/${context.locale}.json`)).default
	  }
	};
  }