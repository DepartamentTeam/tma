//@ts-nocheck
import { UploadFile } from "../../components/FormUpload/Form";
import Avatar from "../../shared/ui/Avatar/Avatar";
import { Input } from "../../shared/ui/Input/Input";
import { type InitData, useInitData } from "@tma.js/sdk-solid";
import { Page } from "../../components/Page/Page";
import { Show, Suspense, useContext, createResource } from "solid-js";
import style from "./style.module.css";
import { Button } from "../../shared/ui/Button/Button";
import { TonConnectButton } from "../../app/tonconnect/TonConnectUIButton";
import { useTonWallet } from "../../app/tonconnect/useTonConnect";
import { useTonConnectUI } from "../../app/tonconnect/useTonConnectUI";
import { createMemo } from "solid-js";
import { AppContext } from "../../shared/store/jobs";
import { unwrap } from "solid-js/store";

export const UserPage = () => {
  const { store, setUser } = useContext(AppContext);

  if (!store.user) {
    setUser(useInitData().user);
  }

  const user = unwrap(store.user);
  console.log("UserPage", user);

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

  const submitClick = () => {
    document.getElementById("submit-btn").click();
  };

  const submitHandler = async (event: Event) => {
    event.preventDefault();
    let formData = new FormData(event.target);

    // {
    //   "id": 0,
    //   "registrationDate": "2024-06-14T19:15:25.353Z",
    //   "telegramId": "string",
    //   "telegramFirstName": "string",
    //   "telegramIsBot": true,
    //   "telegramUserName": "string",
    //   "telegramLastName": "string",
    //   "telegramLanguageCode": "string"
    // }

    let body = {
      telegramId: user.id,
      telegramFirstName: user.firstName,
      telegramIsBot: false,
      telegramUserName: user.username,
      telegramLastName: user.lastName,
      telegramLanguageCode: user.languageCode,
    };

    formData.append("telegramId", user.id);
    formData.append("telegramFirstName", user.firstName);
    formData.append("telegramIsBot", false);
    formData.append("telegramUserName", user.username);
    formData.append("telegramLastName", user.lastName);
    formData.append("telegramLanguageCode", user.languageCode);

    try {
      let res = await fetch(
        "https://cvbird.ai/api1/telegram/unknown_user/save",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(body),
        }
      );
      return res.json();
    } catch (err) {
      console.error(err);
    }
  };

  const [tonConnectUI] = useTonConnectUI();

  return (
    <Page
      class={style.container}
      actions={<Button onClick={submitClick} label="Update" />}
    >
      {registrationCheck() && setUser({...user, user_id: registrationCheck().cvBirdUserId})}
      <form class={style.container} onSubmit={submitHandler}>
        <span>Resume</span>
        <Show when={user.id}>
          <UploadFile id={user.id} />
        </Show>

        <span>Personal Information</span>

        <Show when={user}>
          <Avatar size="lg" firstname={user?.firstName} />
        </Show>
        <span>Main Info</span>
        <Input
          label="Firstname"
          name="firstname"
          value={user?.firstName}
          autoComplete="given-name"
          placeholder="John"
        />

        <Input
          label="Lastname"
          name="lastname"
          placeholder="Doe"
          value={user?.lastName}
          autoComplete="off"
        />

        {/* <Input
          required
          label="Password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          autoComplete="password"
          name="password"
          type="password"
        /> */}

        <span>Contact with</span>

        <Input
          label="Email"
          name="email"
          placeholder="john.doe@example.com"
          value={undefined}
          autoComplete="username"
        />
        <Input
          label="Telegram"
          name="telegram"
          placeholder="john.doe@example.com"
          value={user?.username}
          autoComplete="username"
        />

        <span>Links</span>
        <Input
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.85345 2.42673C4.85345 3.76697 3.76697 4.85345 2.42672 4.85345C1.08648 4.85345 0 3.76697 0 2.42673C0 1.08648 1.08648 0 2.42672 0C3.76697 0 4.85345 1.08648 4.85345 2.42673ZM15.8215 6.28841C15.6674 6.26915 15.5037 6.25952 15.34 6.24989C12.9999 6.15359 11.6807 7.54029 11.2184 8.13734C11.0932 8.30105 11.0355 8.39735 11.0355 8.39735V6.61582H7.03906V19.9436H11.0355H11.2184V15.8798V13.6841C11.2184 13.5807 11.2175 13.4766 11.2167 13.3719C11.2098 12.5607 11.2027 11.7213 11.6036 10.9878C11.9888 10.2944 12.6822 9.94776 13.4622 9.94776C15.7733 9.94776 15.8215 12.0374 15.8215 12.23V12.2493V20.0013H20.0009V11.3056C20.0009 8.32994 18.489 6.5773 15.8215 6.28841ZM4.51921 6.57715H0.339844V19.9049H4.51921V6.57715Z"
                fill="white"
              />
            </svg>
          }
          label="LinkedIn"
          name="linkedin"
          placeholder="http://"
          autoComplete="off"
        />
        <button
          id="submit-btn"
          style={{ opacity: 0, "pointer-events": "none", width: 0, height: 0 }}
          type="submit"
        >
          Submit{" "}
        </button>
      </form>
      <span>Payment</span>
      <div class={style.col}>Plan: </div>
      <div class={style.col}>Balance: {tonConnectUI()} </div>
      <div class={style.col}>
        {" "}
        Wallet: <TonConnectButton />{" "}
      </div>
    </Page>
  );
};
