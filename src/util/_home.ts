import { del } from "./_cliDB";

export const deleteHandler = (id, eventTriggerHandler) => {
  del(id);
  eventTriggerHandler();
};
