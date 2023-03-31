import { useReducer } from "react";
import { initialState, clientDBReducer } from "./clientDBReducer";

const useClientDB = () => {
  const [state, dispatch] = useReducer(clientDBReducer, initialState);

  const setDB = (key: string | number, value: string | number) => {
    dispatch({
      type: "set",
      payload: {
        key,
        value,
      },
    });
  };
  const getKey = (key: string | number) => {
    return dispatch({
      type: "get",
      payload: {
        key,
      },
    });
  };
  const delDB = (key: string | number) => {
    dispatch({
      type: "del",
      payload: {
        key,
      },
    });
  };
  const clearDB = () =>
    dispatch({
      type: "clear",
    });
  const getKeys = () => {
    return dispatch({
      type: "keys",
    });
  };
  const getValues = () => {
    return dispatch({
      type: "values",
    });
  };

  return {
    state,
    setDB,
    getKey,
    delDB,
    clearDB,
    getKeys,
    getValues,
  };
};

export default useClientDB;
