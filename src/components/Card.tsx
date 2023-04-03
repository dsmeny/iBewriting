import { useState, useEffect, useRef } from "react";
import { FcExpand } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { IoMdTrash, IoMdCreate } from "react-icons/io";

const Card = ({ id, message, deleteHandler }) => {
  const [expandable, setExpandable] = useState(false);
  const [doRetract, setDoRetract] = useState(false);

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
    const target = textRef.current as HTMLElement;
    if (target.classList.contains("readable")) {
      target.classList.remove("readable");
      setDoRetract(false);
      return;
    }
    setDoRetract(true);
    target.classList.add("readable");
  };

  return (
    <div className="outer-c">
      <div className="inner-c">
        <div className="icon-group">
          <IoMdCreate className="icon-group-styling" />
          <IoMdTrash className="icon-group-styling" onClick={deleteCard} />
        </div>
        <div className="cutoff-text" ref={textRef}>
          {doRetract && (
            <div>
              <GrClose className="inner-c-close" onClick={expandHandler} />
            </div>
          )}
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
