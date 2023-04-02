import { useState, useEffect, useRef } from "react";
import { FcExpand } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import Button from "./Button";

const Card = ({ id, message, deleteHandler }) => {
  const [expandable, setExpandable] = useState(false);

  const textRef = useRef();

  useEffect(() => {
    const target = textRef.current;
    if (target) {
      const clientHt = (target as HTMLElement).clientHeight;
      const scrollHt = (target as HTMLElement).scrollHeight;
      if (scrollHt > clientHt) {
        setExpandable(true);
      }
    }
  }, [expandable]);

  const deleteCard = () => {
    deleteHandler(id);
  };

  const expandHandler = () => {
    // setExpandable(false);

    const target = textRef.current as HTMLElement;
    if (target.classList.contains("readable")) {
      target.classList.remove("readable");
      return;
    }
    target.classList.add("readable");
  };

  return (
    <div className="outer-c">
      <div className="inner-c">
        <Button text={"del"} id={id} onClick={deleteCard} />
        <div className="cutoff-text" ref={textRef}>
          <GrClose />
          <p>{message}</p>
        </div>

        {expandable && (
          <FcExpand className="expandable-icon" onClick={expandHandler} />
        )}
      </div>
    </div>
  );
};

export default Card;
