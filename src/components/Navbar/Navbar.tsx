import style from "./style.module.css";
import { Chip } from "../../shared/ui/Chip/Chip";
import { A } from "@solidjs/router";
import { Show, useContext } from "solid-js";
import { AppContext } from "../../shared/store/jobs";

const Navbar = () => {
  const { store } = useContext(AppContext);

  return (
    <Show when={store.user}>
      <div class={style.container}>
        <div class={style.me}>
          <A href="/me">{store.user?.firstName}
          
        
          </A>

          
        </div>

       
          <Chip size="sm" theme="accent" variant="filled" label="Basic" />
        
      </div>
    </Show>
  );
};

export default Navbar;
