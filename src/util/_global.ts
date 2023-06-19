export const SETTINGS_STORE = "settings";

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
