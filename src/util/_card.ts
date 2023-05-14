import { v4 as uuid } from "uuid";
import { set } from "./_cliDB";
import { createStrMsg } from "./_global";

export const editCard = (
  textRef,
  doEdit,
  setDbUpdate,
  expandable,
  setDoRetract
) => {
  const target = textRef.current as HTMLElement;

  target.classList.add("willEdit");

  if (doEdit) {
    target.classList.remove("willEdit");
  }

  setDbUpdate(true);
  if (expandable) {
    target.classList.add("readable");
    setDoRetract(true);
  }
};

export const expandCard = (textRef, setDoEdit, setDoRetract) => {
  const target = textRef.current as HTMLElement;
  if (target.classList.contains("readable")) {
    target.classList.remove("readable");
    target.classList.remove("willEdit");
    setDoEdit((prev) => !prev);
    setDoRetract(false);
    setDoEdit(false);
    return;
  }
  setDoRetract(true);
  target.classList.add("readable");
};

export const copyCard = async (messageRef) => {
  const message_ = (messageRef.current as HTMLElement).textContent;
  await navigator.clipboard.writeText(message_);
};

export const duplicateCard = (messageRef) => {
  const message = (messageRef.current as HTMLElement).textContent;
  const strVal = createStrMsg(message);
  set(strVal, uuid(message));
  // location.reload();
};

export const effectHandler = (
  textRef,
  messageRef,
  setExpandable,
  doEdit,
  editHandler,
  id
) => {
  const target = textRef.current as HTMLElement;
  const message_ = messageRef.current as HTMLElement;
  message_.focus();

  if (target) {
    const clientHt = target.clientHeight;
    const scrollHt = target.scrollHeight;
    if (scrollHt > clientHt) {
      setExpandable(true);
      message_.focus();
    }
  }

  if (!doEdit) {
    editHandler(id, message_.textContent);
  }
};
