//@ts-nocheck
import { Show, Suspense, createResource, useContext } from "solid-js";
import { unwrap } from "solid-js/store";
import { Page } from "../../../components/Page/Page";
import { createAsync, json, useParams } from "@solidjs/router";
import { AppContext } from "../../../shared/store/jobs";
import style from "../style.module.css";
import { getShortCompanyName, getShortSalary } from "../helpers";
import { useMainButton, useMiniApp } from "@tma.js/sdk-solid";
import { Button } from "../../../shared/ui/Button/Button";
import { Chip } from "../../../shared/ui/Chip/Chip";

export function JobUIPage() {
  const params = useParams();

  const handleGetJobById = async () => {
    try {
      let res = await fetch(
        `https://cvbird.ai/api2/get_job_by_id/`,

        {
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          method: "POST",
          body: JSON.stringify({ job_id: parseInt(params.id) }),
        }
      );

      return res.json();
    } catch (err) {
      console.error(err);
    }
  };

  const [job] = createResource(handleGetJobById);
  console.log(job.latest);
  const app = useMiniApp();
  return (
    <Show when={job()?.job_info}>
      <Page
        actions={
          <Button
            label="Apply"
            variant="primary"
            onClick={() => app().sendData(JSON.stringify({job_id: params.id}))}
          />
        }
      >
        <div class={style.header}>
          <div class={style.ballLg}>
            {getShortCompanyName(job().job_info?.company)}
          </div>

          <span class={style.pageTitle}>
            {job().job_info?.title}
            <span>{job().job_info?.company}</span>
            <span>{getShortSalary(job().job_info?.salary)}</span>
            <span>{  new Date(job().job_info?.created).toDateString()}</span>
          </span>
        </div>
        <div class={style.chips}>
          <Chip
            variant="filled"
            theme="accent"
            label={job().job_info?.employment_type}
          />
        </div>
        <div class={style.description}>
          
          <a href={job().job_info?.url} target="__blank">
         
          Source
          </a>
        </div>
      </Page>
    </Show>
  );
}
