//@ts-nocheck
import { For, createResource, createSignal, useContext } from "solid-js";
import ListItem from "../../components/JobUI/ListItem/ListItem";
import { Page } from "../../components/Page/Page";
import style from "./style.module.css";
import { Flow } from "../../components/JobFlow/JobFlow";
import { useThemeParams } from "@tma.js/sdk-solid";
import { AppContext, JobContext } from "../../shared/store/jobs";
import { Button } from "../../shared/ui/Button/Button";
import AppliedJobPage from "../Applied/AppliedJobs";
import { A, useNavigate } from "@solidjs/router";
import { unwrap } from "solid-js/store";

export const OfferedPage = () => {
  const [viewMode, setViewMode] = createSignal<"cards" | "list">("cards");
  const { store } = useContext(AppContext);
  const theme = useThemeParams();

  console.log(unwrap(store).user)

  const handleGetLikedJobs = async () => {
    try {
      let res = await fetch(
        "https://cvbird.ai/api2/get_user_selected_jobs/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id: unwrap(store).user.cvBirdUserId }),
        }
      );

      return res.json();
    } catch (err) {
      console.error(err);
    }
  };

  const [likedJobs] = createResource(handleGetLikedJobs);


  return (
    <Page>
      <div class={style.switch}>
        <span>
          <svg
            onClick={() => setViewMode("cards")}
            width="84"
            height="91"
            viewBox="0 0 84 91"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M83.2668 13.675L75.7074 71.1672C75.1931 75.0755 71.5936 77.801 67.711 77.2867L63.6742 76.7467L56.1406 19.5117C55.4978 14.7034 51.3839 11.0781 46.5243 11.0781C46.1128 11.0781 45.6757 11.1038 45.2644 11.1553L29.5542 13.2122L30.4028 6.70701C30.9171 2.79887 34.4911 0.0476683 38.3992 0.561778L77.1216 5.67862C81.0298 6.19274 83.7811 9.76676 83.2668 13.675ZM61.1556 77.3443L53.5911 19.8527C53.0776 15.9484 49.4961 13.1996 45.5914 13.7134L6.87248 18.8076C2.96814 19.3213 0.21941 22.9029 0.73313 26.8073L8.29729 84.2989C8.81102 88.2032 12.3927 90.952 16.297 90.4383L55.0161 85.3439C58.9205 84.8301 61.6692 81.2487 61.1556 77.3443Z"
              fill={
                viewMode() == "cards"
                  ? theme().accentTextColor
                  : theme().hintColor
              }
            />
          </svg>

          <svg
            onClick={() => setViewMode("list")}
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill={
              viewMode() == "list" ? theme().accentTextColor : theme().hintColor
            }
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 4.5C3.10457 4.5 4 3.60457 4 2.5C4 1.39543 3.10457 0.5 2 0.5C0.89543 0.5 0 1.39543 0 2.5C0 3.60457 0.89543 4.5 2 4.5Z" />
            <path d="M8 4.5H18C19.1 4.5 20 3.6 20 2.5C20 1.4 19.1 0.5 18 0.5H8C6.9 0.5 6 1.4 6 2.5C6 3.6 6.9 4.5 8 4.5Z" />
            <path d="M2 11.5C3.10457 11.5 4 10.6046 4 9.5C4 8.39543 3.10457 7.5 2 7.5C0.89543 7.5 0 8.39543 0 9.5C0 10.6046 0.89543 11.5 2 11.5Z" />
            <path d="M18 7.5H8C6.9 7.5 6 8.4 6 9.5C6 10.6 6.9 11.5 8 11.5H18C19.1 11.5 20 10.6 20 9.5C20 8.4 19.1 7.5 18 7.5Z" />
            <path d="M2 18.5C3.10457 18.5 4 17.6046 4 16.5C4 15.3954 3.10457 14.5 2 14.5C0.89543 14.5 0 15.3954 0 16.5C0 17.6046 0.89543 18.5 2 18.5Z" />
            <path d="M18 14.5H8C6.9 14.5 6 15.4 6 16.5C6 17.6 6.9 18.5 8 18.5H18C19.1 18.5 20 17.6 20 16.5C20 15.4 19.1 14.5 18 14.5Z" />
          </svg>
        </span>
      </div>

      {viewMode() == "cards" ? (
        <Flow />
      ) : (
        <Show when={likedJobs()} fallback={<>Applied jobs</>}>
          <For each={likedJobs().jobs}>{(obj) => <ListItem {...obj} />}</For>
        </Show>
      )}
    </Page>
  );
};
