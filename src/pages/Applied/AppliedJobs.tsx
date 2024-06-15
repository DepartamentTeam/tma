//@ts-nocheck
import { Show, createResource, useContext } from "solid-js";
import { Page } from "../../components/Page/Page";

import { For } from "solid-js";
import ListItem from "../../components/JobUI/ListItem/ListItem";
import { AppContext } from "../../shared/store/jobs";
import { A } from "@solidjs/router";

export default function AppliedJobPage() {
  const { store } = useContext(AppContext);

  if (store?.user.cvBirdUserId) {
    const handleGetLikedJobs = async () => {
      try {
        let res = await fetch(
          "https://cvbird.ai/api2/get_user_selected_jobs/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: store.user?.cvBirdUserId }),
          }
        );

        return res.json();
      } catch (err) {
        console.error(err);
      }
    };

    const [likedJobs] = createResource(handleGetLikedJobs);

    return (
      <>
        <h1>A</h1>
        <Show when={likedJobs()}>
          <For each={likedJobs().jobs}>{(obj) => <ListItem {...obj} />}</For>
        </Show>
      </>
    );
  } else {
    <A href="/me">Registration required</A>;
  }
}
