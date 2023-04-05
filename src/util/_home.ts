import { FormEvent } from "react";
import { v4 as uuid } from "uuid";
import { set, del } from "./_cliDB";

export const submitHandler = (
  event: FormEvent<HTMLFormElement>,
  setEventTrigger,
  eventTrigger
) => {
  event.preventDefault();
  const name = (event.target as HTMLFormElement).elements["name"].value;
  set(name, uuid(name));
  setEventTrigger(() => !eventTrigger);
};

export const deleteHandler = (id, setEventTrigger, eventTrigger) => {
  del(id);
  setEventTrigger(() => !eventTrigger);
};

export const editHandler = (id, updatedMsg) => {
  set(updatedMsg, id);
};
