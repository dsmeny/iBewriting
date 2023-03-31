import { FormEvent } from "react";

import Button from "./Button";
import useClientDB from "../util/clientDB/useClientDB";

const Form = () => {
  const { state, setDB, getKey, delDB, clearDB, getKeys, getValues } =
    useClientDB();

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = (event.target as HTMLFormElement).elements["name"].value;
    console.log(name);
  }

  return (
    <form id="form1" onSubmit={submitHandler}>
      <input id="inputField" type="text" name="name" className="form-input" />
      <Button type="submit" className="form-btn" text="submit" />
    </form>
  );
};

export default Form;
