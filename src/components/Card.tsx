import { useState, useEffect, useRef } from "react";
import { FcExpand } from "react-icons/fc";
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
  }, []);

  const deleteCard = () => {
    deleteHandler(id);
  };

  const expandHandler = () => {
    // setExpandable(false);
    const target = textRef.current;
    (target as HTMLElement).classList.add("readable");
  };

  return (
    <div className="outer-c">
      <div className="inner-c">
        <Button text={"del"} id={id} onClick={deleteCard} />
        <p className="cutoff-text" ref={textRef}>
          {message}
        </p>
        {expandable && (
          <FcExpand className="expandable-icon" onClick={expandHandler} />
        )}
      </div>
    </div>
  );
};

export default Card;
