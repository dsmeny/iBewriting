import { v4 as uuid } from "uuid";
import { set } from "./_cliDB";
import { createStrMsg, stripDate } from "./_global";

export const editCard = (
  cardRef,
  messageRef,
  id,
  doEdit,
  setDoEdit,
  expandable,
  setDoRetract
) => {
  const target = cardRef.current as HTMLElement;
  const messageElem = messageRef.current as HTMLElement;
  const message = messageElem.textContent;

  if (doEdit) {
    target.classList.remove("willEdit");
    setDoEdit(false);
    set(message, id);
    return;
  }

  target.classList.add("willEdit");
  messageElem.focus();
  setDoEdit(true);

  if (expandable) {
    target.classList.add("readable");
    setDoRetract(true);
  }
};

export const expandCard = (cardRef, setDoEdit, setDoRetract) => {
  const card = cardRef.current as HTMLElement;

  if (card.classList.contains("readable")) {
    card.classList.remove("readable");
    card.classList.remove("willEdit");
    setDoRetract(false);
    setDoEdit(false);
    return;
  }
  setDoRetract(true);
  card.classList.add("readable");
};

export const copyCard = async (messageRef) => {
  let message_ = (messageRef.current as HTMLElement).textContent;
  message_ = message_.replace(/.*[A-Z](?:\:)/s, "").trimStart();
  await navigator.clipboard.writeText(message_);
};

export const duplicateCard = (messageRef) => {
  const message = (messageRef.current as HTMLElement).textContent;
  const stripMessage = stripDate(message);
  const strVal = createStrMsg(stripMessage);
  set(strVal, uuid(stripMessage));
};

export const expandHandler = (cardRef, setExpandable) => {
  const target = cardRef.current as HTMLElement;

  if (target) {
    const clientHt = target.clientHeight;
    const scrollHt = target.scrollHeight;
    if (scrollHt > clientHt) {
      setExpandable(true);
    }
  }
};
