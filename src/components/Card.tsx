import React from "react";
import Button from "./Button";

const Card = ({ message, id }) => {
  return (
    <div className="outer-c">
      <div className="outer-c">
        <p>{message}</p>
        <Button text={"del"} id={id} />
      </div>
    </div>
  );
};

export default Card;
