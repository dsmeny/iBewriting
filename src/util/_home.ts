import { FormEvent } from "react";
import { v4 as uuid } from "uuid";
import { set, del } from "./_cliDB";

export const submitHandler = (
  event: FormEvent<HTMLFormElement>,
  setEventTrigger,
  eventTrigger
) => {
  const target = (event.target as HTMLFormElement).elements["name"];
  const name = target.value;
  set(name, uuid(name));
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
