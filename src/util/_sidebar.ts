import { FormEvent } from "react";
import { createStrMsg } from "./_global";
import { set } from "./_cliDB";
import { v4 as uuid } from "uuid";

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
