import { get, set, del, clear, keys, values } from "./_cliDB";

export const initialState = {
  dbKey: 0,
  dbValue: "",
  dbKeys: [],
  dbValues: [],
};

export const clientDBReducer = (state, action) => {
  switch (action.type) {
    case "set":
      set(action.payload.key, action.payload.value);
      return {
        ...state,
        dbKey: action.payload.key,
        dbValue: action.payload.value,
      };
    case "get":
      const key = get(action.payload.key);
      return {
        ...state,
        dbKey: key,
        dbValue: "",
      };
    case "del":
      del(action.payload.key);
      return state;
    case "clear":
      clear();
      return state;
    case "keys":
      const getKeys = keys();
      return {
        ...state,
        dbKeys: getKeys,
      };
    case "values":
      const getValues = values();
      return {
        ...state,
        dbValues: getValues,
      };
    default:
      return state;
  }
};
