import style from "./style.module.css";
import { Chip } from "../../shared/ui/Chip/Chip";
import { A } from "@solidjs/router";
import { Show, createResource, useContext } from "solid-js";
import { AppContext } from "../../shared/store/jobs";

const Navbar = () => {
  const { store } = useContext(AppContext);
  
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

  const [registrationCheck] = createResource(userInfo);
  
  return (
    <Show when={store.user}>
      <div class={style.container}>
        <div class={style.me}>
          <A href="/me">{store.user?.firstName}
          
          <Show when={registrationCheck()}>
            {registrationCheck().response == "The there is no such user" && (
              <Chip
                size="sm"
                theme="error"
                variant="filled"
                label="Resume required"
              />
            )}
          </Show>
          </A>

          
        </div>

        <A href="/planes">
          <Chip size="sm" theme="accent" variant="filled" label="Basic" />
        </A>
      </div>
    </Show>
  );
};

export default Navbar;
