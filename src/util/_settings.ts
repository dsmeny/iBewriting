import { SETTINGS_STORE } from "./_global";

export const localStoreHandler = (action, settings) => {
  switch (action) {
    case "set":
      localStorage.setItem(SETTINGS_STORE, settings);
      return;
    case "get":
      const res = localStorage.getItem(SETTINGS_STORE);
      return res;
    case "remove":
      localStorage.removeItem(SETTINGS_STORE);
      return;
    case "clear":
      localStorage.clear();
    default:
      return;
  }
};

export const checkHandler = (e, setToggleID) => {
  const target = e.target;
  const id = target.id;

  setToggleID(() => {
    return {
      [`${id}`]: target.checked,
    };
  });
};
