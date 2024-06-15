//@ts-nocheck
import {
  Show,
  createEffect,
  createResource,
  createMemo,
  createSignal,
  on,
  useContext,
  onMount,
} from "solid-js";
import { Chip } from "../../shared/ui/Chip/Chip";
import style from "./style.module.css";
import { AppContext } from "../../shared/store/jobs";
import { useInitData } from "@tma.js/sdk-solid";

type Props = {
  id: number;
};

type TFile = {
  file: File;
  b64: string;
  name: string;
};

export function UploadFile(props: Props) {
  const { store, setStore } = useContext(AppContext);

  const [file, setFile] = createSignal<TFile | undefined>(undefined);
  const [isLoading, setIsLoading] = createSignal(false);
  const [isError, setIsError] = createSignal({ state: false, message: "" });
  const [uploadResponse, setUploadResponse] = createSignal();

  const [isResumeExist, setIsResumeExist] = createSignal(false);

  function getBase64(file): string {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  }

  const handleClick = (e: Event) => {
    console.log(e.target);

    document.getElementById("resume-file-input").click();
  };

  const handleSelectFile = (e: Event) => {
    setFile({ file: e.target.files[0], name: e.target.files[0].name });
    getBase64(e.target.files[0]).then((b64) =>
      setFile(Object.assign(file(), { b64: b64 }))
    );
    console.debug(file());
  };

  const handleUpload = async () => {
    const form: HTMLFormElement = document.getElementById("form-upload-resume");

    if (file()) {
      let body = {
        telegramId: store.user?.id?.toString(),
        file: file().b64,
      };

      try {
        setIsLoading(true);
        const response = await fetch(
          `https://cvbird.ai/api1/cv/store_by_telegram_id`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors",
            method: "POST",
            body: JSON.stringify(body),
          }
        );

        return response.json();
      } catch (err) {
        setIsError({ state: true, message: "Error while uploading resume" });
        console.error("Error while uploading resume", err);
      }
    }
  };

  const handleUploadResponse = () => {
    handleUpload().then((data) => {
      console.log("Upload response", data);
      if (data?.response == "CV has been saved") {
        isResumeExist(true);
      }

      setIsLoading(false);

      if (data.status != 200 || data?.response != "CV has been saved") {
        setIsError({ state: true, message: data.error || data.response });
      }
      setUploadResponse(data);
    });
  };

  const handleGetInitialCv = async () => {
    try {
      // /${props.id}
      const response = await fetch(
        `https://cvbird.ai/api1/cv/get_by_telegram_id/${props.id}`,
        {
          mode: "cors",
        }
      );

      return response.json();
    } catch (err) {
      console.error("Error while get existed resume", err);
      setIsError({ state: true, message: "Error while get existed resume" });
    }
  };

  onMount(() =>
    handleGetInitialCv().then((d) => {
      console.debug("handleGetInitialCv Data", d);
      if (!d) {
        setIsResumeExist(false);
      } else if (d.status == 500) {
        setIsResumeExist(false);
      } else {
        d.response == "CV was not found"
          ? setIsResumeExist(false)
          : setIsResumeExist(true);
      }
    })
  );

  createEffect(on(file, handleUploadResponse));

  return (
    <>
      {isResumeExist() ==  true ? (
        <form noValidate id="form-upload-resume" class={`${style.container}`}>
          <button
            type="button"
            class={`${isError().state && "error"} ${isLoading() && "loading"}`}
          >
            <div
              class={` ${isError().state ? "error" : "accent"} ${style.resume}`}
            >
              {!file() ? (
                <svg
                  width="20"
                  height="23"
                  viewBox="0 0 20 23"
                  fill="inherit"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2862 4.44485C13.9446 2.13825 10.0971 2.13825 7.75555 4.44485L2.40326 9.71717C2.01402 10.1006 1.38765 10.0959 1.00423 9.70664C0.62081 9.3174 0.625525 8.69104 1.01476 8.30761L6.36706 3.03529C9.47884 -0.0299962 14.5629 -0.0299909 17.6747 3.0353C20.7362 6.05105 20.7362 10.9045 17.6747 13.9202L10.327 21.1581C7.97262 23.4773 4.12906 23.4773 1.77469 21.1581C-0.545665 18.8724 -0.545665 15.1909 1.77469 12.9052L9.15558 5.63463C10.7397 4.07416 13.2964 4.00277 14.9694 5.46766C16.8073 7.07694 16.8466 9.87865 15.0518 11.5362L8.89293 17.2238C8.49154 17.5945 7.86565 17.5696 7.49497 17.1682C7.12429 16.7669 7.14919 16.141 7.55058 15.7703L13.7094 10.0826C14.6394 9.22383 14.6208 7.79227 13.666 6.95624C12.7703 6.17198 11.3879 6.21296 10.5441 7.04419L3.16318 14.3148C1.6296 15.8255 1.6296 18.2379 3.16318 19.7486C4.74735 21.3091 7.35433 21.3091 8.9385 19.7486L16.2862 12.5107C18.5609 10.27 18.5609 6.68558 16.2862 4.44485Z"
                  />
                </svg>
              ) : (
                <svg
                  width="19"
                  height="24"
                  viewBox="0 0 19 24"
                  fill="inherit"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.36106 0.600098L9.22581 0.600098C10.1962 0.600098 11.1299 0.970835 11.836 1.63648L17.3734 6.85671C18.3439 7.77789 18.8954 9.05588 18.9 10.3939L18.9 16.1391C18.9 17.2262 18.9 18.0968 18.8425 18.8006C18.7835 19.5232 18.6593 20.1488 18.3659 20.7246C17.8962 21.6466 17.1466 22.3962 16.2246 22.866C15.6487 23.1594 15.0232 23.2836 14.3005 23.3426C13.5967 23.4001 12.726 23.4001 11.639 23.4001H7.36105C6.27398 23.4001 5.4033 23.4001 4.69953 23.3426C3.97686 23.2836 3.3513 23.1594 2.77545 22.866C1.85346 22.3962 1.10385 21.6466 0.634075 20.7246C0.340667 20.1488 0.216536 19.5232 0.157492 18.8006C0.0999917 18.0968 0.0999982 17.2261 0.100006 16.139V7.86115C0.0999982 6.77407 0.0999917 5.90339 0.157492 5.19962C0.216536 4.47695 0.340667 3.85139 0.634075 3.27554C1.10385 2.35355 1.85346 1.60395 2.77545 1.13417C3.3513 0.840759 3.97686 0.716628 4.69953 0.657584C5.4033 0.600083 6.27398 0.60009 7.36106 0.600098ZM4.8461 2.45161C4.23475 2.50156 3.87244 2.59541 3.59264 2.73798C3.00933 3.03519 2.53509 3.50942 2.23789 4.09273C2.09532 4.37253 2.00146 4.73484 1.95151 5.34619C1.90071 5.96805 1.90001 6.76514 1.90001 7.9001V16.1001C1.90001 17.2351 1.90071 18.0321 1.95151 18.654C2.00146 19.2654 2.09532 19.6277 2.23789 19.9075C2.53509 20.4908 3.00933 20.965 3.59264 21.2622C3.87244 21.4048 4.23475 21.4986 4.8461 21.5486C5.46796 21.5994 6.26505 21.6001 7.40001 21.6001H11.6C12.735 21.6001 13.5321 21.5994 14.1539 21.5486C14.7653 21.4986 15.1276 21.4048 15.4074 21.2622C15.9907 20.965 16.4649 20.4908 16.7621 19.9075C16.9047 19.6277 16.9985 19.2654 17.0485 18.654C17.0993 18.0321 17.1 17.2351 17.1 16.1001L17.1 11.3251H12.3904C11.8605 11.3251 11.4094 11.3251 11.0389 11.2949C10.6498 11.2631 10.2712 11.1934 9.90924 11.009C9.36357 10.731 8.91993 10.2873 8.6419 9.74167C8.45748 9.37974 8.38785 9.00114 8.35605 8.61198C8.32579 8.24155 8.3258 7.79037 8.32581 7.2605V2.4001H7.40001C6.26505 2.4001 5.46796 2.4008 4.8461 2.45161ZM10.1258 2.61342L10.1258 7.2251C10.1258 7.8 10.1265 8.17705 10.1501 8.4654C10.1728 8.74325 10.2121 8.8586 10.2457 8.92449C10.3512 9.13147 10.5194 9.29974 10.7264 9.4052C10.7923 9.43878 10.9077 9.47814 11.1855 9.50084C11.4739 9.5244 11.8509 9.5251 12.4258 9.5251H16.9708C16.8174 9.01027 16.5312 8.53907 16.1342 8.16224L10.6013 2.94623C10.4586 2.81167 10.2982 2.69999 10.1258 2.61342Z"
                  />
                </svg>
              )}
            </div>

            {!file()?.file ? (
              <div class={style.label}>
                {" "}
                <label>
                  <span>Attach resume</span>

                  <input
                    style={{ "pointer-events": "none" }}
                    id="resume-file-input"
                    type="file"
                    onChange={handleSelectFile}
                    accept=".pdf"
                  />
                </label>
                <Chip theme="accent" size="sm" variant="filled" label=".pdf" />
              </div>
            ) : (
              <div class={style.label}>
              
              <span >{file()?.name}</span>
              
              </div>
            )}
          </button>
        </form>
      ) : (
        <div class={style.container}>
          <button>
            <div class={` ${isResumeExist() && "ok"} ${style.resume}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="inherit"
                  fill-rule="evenodd"
                  d="M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927 5.473-6.385a.75.75 0 0 1 1.057-.081"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            {isError().state !== true && <span>Resume found</span>}
          </button>
        </div>
      )}

      {isError().state == true && (
        <span class="notif error">{isError().message}</span>
      )}
    </>
  );
}
