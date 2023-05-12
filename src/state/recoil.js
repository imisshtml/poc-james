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

const useData = () => {
  const [data, setData] = useRecoilState(dataState);
  const [count, setCount] = useRecoilState(counterState);

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

  return {
    list: data.list,
    loading: data.loading,
    count,
    addOne,
    getData,
  };
};

export default useData;
