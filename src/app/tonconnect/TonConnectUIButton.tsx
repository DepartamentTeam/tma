import { onCleanup, onMount, type Component } from "solid-js";

import { useTonConnectUI } from "./TonUIContext";

export const TonConnectButton: Component = () => {
  const [, { setUIOptions }] = useTonConnectUI();
  const buttonRootId = "ton-connect-button";

  onMount(() => {
    setUIOptions({
      buttonRootId,
      uiPreferences: {
        borderRadius: "s",
        theme: "SYSTEM",
         
      },
      actionsConfiguration: {
          twaReturnUrl: import.meta.env.DEV ? "https://tg-mini-app.local" : "https://t.me/cvbird_demo_bot/twa"
      }
      
    });
  });

  onCleanup(() => {
    setUIOptions({ 
      buttonRootId: null,
      uiPreferences: null,
      actionsConfiguration: null
     });
  });

  return <div id={buttonRootId} />;
};
