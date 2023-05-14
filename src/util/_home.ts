import { FormEvent } from "react";
import { v4 as uuid } from "uuid";
import { set, del } from "./_cliDB";
import { createStrMsg } from "./_global";

export const submitHandler = (
  event: FormEvent<HTMLFormElement>,
  setEventTrigger,
  eventTrigger
) => {
  const target = (event.target as HTMLFormElement).elements["name"];
  const message = target.value;
  const strVal = createStrMsg(message);
  set(strVal, uuid(message));

  setEventTrigger(() => !eventTrigger);

  target.value = "";
  target.focus();
};

export const deleteHandler = (id) => {
  del(id);
};

export const editHandler = (id, updatedMsg) => {
  set(updatedMsg, id);
};
