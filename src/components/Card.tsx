import React from "react";
import Button from "./Button";

const Card = ({ id, message, deleteHandler }) => {
  const deleteCard = () => {
    deleteHandler(id);
  };

  return (
    <div className="outer-c">
      <div className="outer-c">
        <p>{message}</p>
        <Button text={"del"} id={id} onClick={deleteCard} />
      </div>
    </div>
  );
};

export default Card;
