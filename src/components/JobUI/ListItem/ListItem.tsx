//@ts-nocheck
import { JSX } from "solid-js/h/jsx-runtime";
import style from "./style.module.css";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { Dictionary, Locale, RawDictionary } from "../../../shared/i18n";
import { createResource } from "solid-js";
import * as i18n from "@solid-primitives/i18n";
import { getShortSalary } from "../helpers";


type Props = {
  id: number;
  title: string;
  salary: string;
  created: string;
  company: string;
  url: string;
  employment_type: string;
  conditions: "remote" | "hybrid" | "office";
  location: string;
  text?: string;
  country: "gm" | "en" | "pl" | "sw";
  handleDrop: (id: number) => void;
  handleAdd: (id: number) => void;
  actions: JSX.Element;
  onClick: () => void;
};


async function fetchDictionary(locale: Locale): Promise<Dictionary> {
    const dict: RawDictionary = (await import(`../../../shared/i18n/${locale}.ts`)).dict;
    return i18n.flatten(dict); // flatten the dictionary to make all nested keys available top-level
  }


export default function ListItem(props: Partial<Props>) {

    const [locale, setLocale] = createSignal<Locale>("en");

    const [dict] = createResource(locale, fetchDictionary);

  const iconsByCountry = {
    sw: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_13_19005)"><path d="M11.9992 24.0008C18.6266 24.0013 23.9996 18.6291 24 12.0017C24.0005 5.37426 18.6283 0.00130176 12.0009 0.000838609C5.37344 0.000375458 0.000479034 5.37258 1.58832e-05 12C-0.000447268 18.6274 5.37176 24.0004 11.9992 24.0008Z" fill="#FFDA44"/><path d="M9.3915 10.4355L23.8986 10.4365C23.132 4.54866 18.0978 0.0013408 12.0009 0.000914728C11.1049 0.000852114 10.2321 0.099838 9.39216 0.285967L9.39145 10.4355L9.3915 10.4355Z" fill="#0052B4"/><path d="M6.26101 10.4351L6.26164 1.45941C2.96648 3.25703 0.607453 6.55457 0.101729 10.4347L6.26101 10.4351L6.26101 10.4351Z" fill="#0052B4"/><path d="M6.26074 13.5656L0.101501 13.5652C0.606683 17.4454 2.96525 20.7433 6.26015 22.5413L6.26074 13.5656Z" fill="#0052B4"/><path d="M9.39124 13.566L9.39053 23.7155C10.2305 23.9017 11.1032 24.0008 11.9992 24.0009C18.0961 24.0013 23.1309 19.4547 23.8983 13.5669L9.39124 13.5659L9.39124 13.566Z" fill="#0052B4"/></g><defs><clipPath id="clip0_13_19005"><rect width="24" height="24" fill="white" transform="translate(0.000854492)"/></clipPath></defs></svg>',
    en: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_13_19039)"><path d="M11.9992 24.0008C18.6266 24.0013 23.9996 18.6291 24 12.0017C24.0005 5.37426 18.6283 0.00130176 12.0009 0.000838609C5.37344 0.000375458 0.000479034 5.37258 1.58831e-05 12C-0.000447268 18.6274 5.37176 24.0004 11.9992 24.0008Z" fill="#F0F0F0"/><path d="M2.48117 4.69424C1.53848 5.92056 0.827615 7.33403 0.413649 8.86958L6.65637 8.87001L2.48117 4.69424Z" fill="#0052B4"/><path d="M23.5869 8.87119C23.1731 7.33563 22.4624 5.92206 21.5199 4.6956L17.3443 8.87075L23.5869 8.87119Z" fill="#0052B4"/><path d="M0.413208 15.1304C0.827007 16.6659 1.53767 18.0795 2.48015 19.3059L6.65579 15.1308L0.413208 15.1304Z" fill="#0052B4"/><path d="M19.3066 2.48188C18.0803 1.53918 16.6668 0.82832 15.1313 0.414307L15.1309 6.65698L19.3066 2.48188Z" fill="#0052B4"/><path d="M4.69356 21.5196C5.91988 22.4623 7.33335 23.1731 8.86885 23.5872L8.86929 17.3445L4.69356 21.5196Z" fill="#0052B4"/><path d="M8.8704 0.413866C7.33484 0.827665 5.92127 1.53833 4.69486 2.48081L8.86996 6.65649L8.8704 0.413866Z" fill="#0052B4"/><path d="M15.1297 23.5876C16.6653 23.1738 18.0788 22.4631 19.3052 21.5207L15.1301 17.345L15.1297 23.5876Z" fill="#0052B4"/><path d="M17.3438 15.1316L21.5189 19.3073C22.4616 18.081 23.1725 16.6675 23.5864 15.132L17.3438 15.1316Z" fill="#0052B4"/><path d="M23.8986 10.4365L13.5654 10.4357L13.5654 10.4357L13.5661 0.102526C13.0537 0.0357872 12.5313 0.000875681 12.0009 0.000838609C11.4703 0.00080153 10.948 0.03564 10.4356 0.102307L10.4349 10.4354L10.4349 10.4355L0.101703 10.4348C0.0349645 10.9471 5.29555e-05 11.4695 1.58831e-05 12C-2.11959e-05 12.5306 0.0348173 13.0529 0.101485 13.5652L10.4346 13.5659L10.4347 13.5659L10.4339 23.8992C10.9463 23.9659 11.4686 24.0008 11.9992 24.0008C12.5297 24.0009 13.052 23.9661 13.5644 23.8994L13.5651 13.5662L13.5651 13.5662L23.8983 13.5669C23.9651 13.0545 24 12.5323 24 12.0017C24.0001 11.4712 23.9652 10.9488 23.8986 10.4365Z" fill="#D80027"/><path d="M15.1302 15.1316L20.4847 20.4868C20.731 20.2407 20.9659 19.9833 21.1901 19.7165L16.606 15.1317L15.1302 15.1316L15.1302 15.1316Z" fill="#D80027"/><path d="M8.86932 15.1312L8.86923 15.1312L3.51409 20.4856C3.76026 20.7319 4.01764 20.9669 4.28443 21.1911L8.86922 16.6068L8.86932 15.1312Z" fill="#D80027"/><path d="M8.86981 8.87027L8.86981 8.87018L3.51537 3.51494C3.26907 3.76111 3.03412 4.01849 2.80994 4.28528L7.39414 8.87012L8.86981 8.87022L8.86981 8.87027Z" fill="#D80027"/><path d="M15.1307 8.87078L20.4859 3.51625C20.2397 3.26995 19.9824 3.035 19.7156 2.81087L15.1308 7.39506L15.1307 8.87078Z" fill="#D80027"/></g><defs><clipPath id="clip0_13_19039"><rect width="24" height="24" fill="white" transform="translate(0.000854492)"/></clipPath></defs></svg>',
    pl: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_13_18962)"><path d="M12.0004 24.0004C18.6278 24.0002 24.0002 18.6275 24 12.0001C23.9998 5.37266 18.6271 0.000220799 11.9997 0.000402828C5.37228 0.000584858 -0.000157612 5.37331 2.44179e-05 12.0007C0.000206447 18.6281 5.37294 24.0006 12.0004 24.0004Z" fill="#F0F0F0"/><path d="M10.9565 12.0005C10.9565 12.0005 3.52197 20.4877 3.51494 20.486C5.68653 22.6575 8.68662 24.0006 12.0004 24.0005C18.6277 24.0003 24.0002 18.6275 24 12.0002L10.9565 12.0005Z" fill="#D80027"/><path d="M3.51447 3.51528C-1.17169 8.20169 -1.17148 15.7997 3.51493 20.4859C5.45143 18.5493 7.31386 16.6868 12 12.0004L3.51447 3.51528Z" fill="#0052B4"/></g><defs><clipPath id="clip0_13_18962"><rect width="24" height="24" fill="white" transform="translate(-0.000305176 0.000732422)"/></clipPath></defs></svg>',
    gm: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_13_19484)"><path d="M0.746489 16.1745C2.44213 20.7441 6.84073 24.0005 12.0003 24.0003C17.1599 24.0002 21.5583 20.7435 23.2537 16.1739L12.0001 15.1308L0.746489 16.1745Z" fill="#FFDA44"/><path d="M11.9996 0.000423329C6.84 0.000565042 2.44158 3.25719 0.746187 7.82684L11.9998 8.86997L23.2534 7.82618C21.5578 3.25666 17.1592 0.000281615 11.9996 0.000423329Z" fill="black"/><path d="M0.746269 7.82688C0.263961 9.12688 -4.77456e-05 10.533 -7.42964e-06 12.0008C3.28864e-05 13.4686 0.264118 14.8747 0.746498 16.1747L23.2538 16.174C23.7361 14.874 24 13.468 24 12.0001C24 10.5323 23.7359 9.12624 23.2535 7.82627L0.746269 7.82688Z" fill="#D80027"/></g><defs><clipPath id="clip0_13_19484"><rect width="24" height="24" fill="white" transform="translate(-0.000366211 0.000732422)"/></clipPath></defs></svg>',
  };

  
  const t = i18n.translator(dict);
  
  
  return (
    <A
      onClick={props.onClick && props.onClick}
      href={`/job/${props.job_id}`}
      class={style.item}

    >
      <div class={style.container}>
        <span>
          {props.company && (
            <div
              class={style.ball}
            >
              {props.company[0]}
            <div class={style.new}></div>
            </div>
          )}
          <div class={style.header}>
            <span
             
              class={style.listTitle}
            >
              {props.title}{" "}
            </span>
            <span class={style.subtitle}>
              {" "}
              {/* {t("salary")}{" "} */}
             {props.location}
                {/* // : t("no_salary")} */}
            </span>
          </div>
        </span>
       <div class={style.salary}> 
       {props.salary !== undefined && props.salary !== " "
                ? getShortSalary(props.salary) : " "}
       </div>
      </div>
    </A>
  );
}
