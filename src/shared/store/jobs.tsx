//@ts-nocheck
import { TJob } from "@/components/JobUI/Card/Card";
import {JSX, createContext } from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";
import {faker} from "@faker-js/faker";
import type { User } from "@tma.js/sdk-solid";



type JobResponse = {
	num_jobs: number;
	requested_title: string;
	offeredJobs: TJob[];
    applyedJobs: TJob[];    
    viewMode: "card" | "list";
    setViewMode: () => void;
};

type AppStore = {
    jobStore: JobResponse
    user: User
}

type AppContext = {
    store: AppStore,
    applyJob: () =>  void,
    setUser: (user: User) => void   
    setOfferedJobs: (jobs: []) => void
}



export const AppContext = createContext<AppContext>()


type Props = {
    children: Element | JSX.Element
}

export const JobContextProvider = (props: Props) => {
   

    // if (import.meta.env.DEV) {
        function createRandomJobs() :TJob {
            return {
              id: faker.number.int(),
              salary:  faker.commerce.price({
                dec: 0,
                min: 1000,
                max: 75000,
              }),
              company: faker.company.name(),
              country: faker.location.country(),
              location: faker.location.city(),
              title: faker.company.catchPhrase(),
              created: faker.date.past(),
              employment_type: "remote",
              url: faker.internet.url(),
              description: faker.lorem.paragraph()
            };
          }

           const fakeJobs = faker.helpers.multiple(createRandomJobs, {
            count: 5,
          });
    
          const initValue : JobResponse = { 
            num_jobs: 0,
            requested_title: "",
            offeredJobs: fakeJobs,
            applyedJobs: [],
            viewMode: "card"
        
        }
    
    
    const [store, setStore] = createStore<AppStore>(initValue)

    const value = {
        store: store,
       // job = id TODO
        setOfferedJobs: (jobs: []) => setStore("jobStore.offeredJobs", jobs),
        applyJob: (job) => { 
           // console.log("apply", store.offeredJobs.filter((j) => j.id == job)[0]);  
            setStore("jobStore.applyedJobs", store.applyedJobs.length, job);
            setStore("jobStore.offeredJobs", store.offeredJobs.filter((obj) => obj.id != job ));
           // console.debug("Store", store)
        },
        setUser: (user: User) =>  {console.log("User", user); setStore("user", user)},
        setViewMode: (viewMode) => { setStore("viewMode",  viewMode) }
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
