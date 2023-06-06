import { atom, useRecoilState } from "recoil";
import { getDelayedData } from "./api";

export const dataState = atom({
  key: "dataState",
  default: {
    loading: false,
    list: [],
  },
});

export const counterState = atom({
  key: "counterState",
  default: 0,
});

export const appState = atom({
  key: "appState",
  default: {
    isAppInitialized: false,
    splashScreenPlayed: false,
  },
});

const useData = () => {
  const [data, setData] = useRecoilState(dataState);
  const [count, setCount] = useRecoilState(counterState);
  const [app, setApp] = useRecoilState(appState);

  const getData = async () => {
    setData((prev) => {
      return {
        ...prev,
        loading: true,
        list: [],
      };
    });
    const result = await getDelayedData();
    setData((prev) => {
      return {
        ...prev,
        loading: false,
        list: result,
      };
    });
  };

  const addOne = () => {
    setCount((prev) => prev + 1);
  };

  const setAppInit = () => {
    setApp((prev) => {
      return {
        ...prev,
        isAppInitialized: true,
      };
    });
  };

  const setSplashPlayed = () => {
    setApp((prev) => {
      return {
        ...prev,
        splashScreenPlayed: true,
      };
    });
  };

  return {
    list: data.list,
    loading: data.loading,
    count,
    addOne,
    getData,
    isAppInitialized: app.isAppInitialized,
    splashScreenPlayed: app.splashScreenPlayed,
    setAppInit,
    setSplashPlayed,
  };
};

export default useData;
