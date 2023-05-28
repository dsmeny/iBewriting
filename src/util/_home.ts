import { FormEvent } from "react";
import { v4 as uuid } from "uuid";
import { set, del } from "./_cliDB";
import { createStrMsg } from "./_global";

export const submitHandler = (
  event: FormEvent<HTMLFormElement>,
  eventTriggerHandler
) => {
  const target = (event.target as HTMLFormElement).elements["name"];
  const message = target.value;
  const strVal = createStrMsg(message);
  set(strVal, uuid(message));

  eventTriggerHandler();

  target.value = "";
  target.focus();
};

export const deleteHandler = (id, eventTriggerHandler) => {
  del(id);
  eventTriggerHandler();
};
