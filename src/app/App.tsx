import { Navigate, Route } from "@solidjs/router";
import {
  initNavigator,
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  useMiniApp,
  useThemeParams,
  useViewport,
  useInitData,
} from "@tma.js/sdk-solid";
import { createRouter } from "@tma.js/solid-router-integration";
import { createEffect, For, onCleanup, Show, useContext } from "solid-js";

import { routes } from "../navigation/routes";
import { AppContext } from "../shared/store/jobs";

export function App() {
  const miniApp = useMiniApp();
  const themeParams = useThemeParams();
  const viewport = useViewport();
  const initData = useInitData();

  const { setUser, store } = useContext(AppContext);

 
  createEffect(() => {
    const userInfo = async () => {
      try {
        let res = await fetch(
          `
          https://cvbird.ai/api1/telegram/get_cvbird_user/${store.user?.id}`,
          {
            mode: "cors",
            method: "GET",
          }
        );
        return res.json();
      } catch (err) {
        console.error(err);
      }
    };

    userInfo().then((data) => {
      console.log(data);
      if (data) {
        let u = Object.assign(initData().user, {
          cvBirdUserId: data.cvBirdUserId,
        });
        setUser(u);
      }
    });

    if (viewport()) {
      viewport().expand()
    }
    
    onCleanup(bindMiniAppCSSVars(miniApp(), themeParams()));
  });

  createEffect(() => {
    onCleanup(bindThemeParamsCSSVars(themeParams()));
  });

  createEffect(() => {
    const vp = viewport();
    vp && onCleanup(bindViewportCSSVars(vp));
  });

  // Create new application navigator and attach it to the browser history, so it could modify
  // it and listen to its changes.
  const navigator = initNavigator("app-navigator-state");
  void navigator.attach();

  onCleanup(() => {
    navigator.detach();
  });

  const Router = createRouter(navigator);

  return (
    <Show when={store}>
      <Router>
        <For each={routes}>
          {(route) => <Route path={route.path} component={route.Component} />}
        </For>
        <Route path="*" component={() => <Navigate href="/" />} />
      </Router>
    </Show>
  );
}
