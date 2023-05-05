import { FormEvent } from "react";
import { v4 as uuid } from "uuid";
import { set, del } from "./_cliDB";

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

export const submitHandler = (
  event: FormEvent<HTMLFormElement>,
  setEventTrigger,
  eventTrigger
) => {
  const target = (event.target as HTMLFormElement).elements["name"];
  const name = target.value;
  const strVal = `${getDateTimeStamp()}: ${name}`;
  set(strVal, uuid(name));
  setEventTrigger(() => !eventTrigger);

  target.value = "";
  target.focus();
};

export const deleteHandler = (id, setEventTrigger, eventTrigger) => {
  del(id);
  setEventTrigger(() => !eventTrigger);
};

export const editHandler = (id, updatedMsg) => {
  set(updatedMsg, id);
};
