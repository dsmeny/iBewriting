export const SETTINGS_STORE = "settings";
export const KEYWORDS_STORE = "keywords";
export const KEYWORD_STORE = "keyword";

const getDateTimeStamp = () => {
  let options = {
    weekday: "short",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "America/New_York",
  };

  const date = new Date();
  const intlDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return intlDate;
};

export const createStrMsg = (message) => {
  const strVal = `${getDateTimeStamp()}: ${message}`;
  return strVal;
};

export const stripDate = (message) => {
  const strVal = message.replace(/.*[A-Z](?:\:)/s, "").trimStart();
  return strVal;
};

export const firstLetterCaps = (str) => {
  const firstLetter = str.charAt(0).toUpperCase();
  const newStr = firstLetter.concat(str.slice(1));
  return newStr;
};

export const localStoreHandler = (key, action, settings = null) => {
  switch (action) {
    case "set":
      localStorage.setItem(key, settings);
      return;
    case "get":
      const res = localStorage.getItem(key);
      return res;
    case "remove":
      localStorage.removeItem(key);
      return;
    case "clear":
      localStorage.clear();
    default:
      return;
  }
};
