import { useState, useEffect, useRef, CSSProperties } from "react";
import { FcExpand } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { IoMdTrash, IoMdCreate } from "react-icons/io";

const Card = ({ id, message, deleteHandler, editHandler }) => {
  const [expandable, setExpandable] = useState(false);
  const [doRetract, setDoRetract] = useState(false);
  const [doEdit, setDoEdit] = useState(false);

  const textRef = useRef();
  const messageRef = useRef();

  const EditStyle = (doEdit: boolean): CSSProperties => {
    return {
      color: doEdit ? "#81e281" : "var(--icon-color)",
    };
  };

  useEffect(() => {
    const target = textRef.current as HTMLElement;
    const message_ = messageRef.current as HTMLElement;

    if (target) {
      const clientHt = target.clientHeight;
      const scrollHt = target.scrollHeight;
      if (scrollHt > clientHt) {
        setExpandable(true);
      }
    }

    if (!doEdit) {
      editHandler(id, message_.textContent);
    }
  }, [doEdit]);

  const deleteCard = () => {
    deleteHandler(id);
  };

  const editCard = () => {
    const target = textRef.current as HTMLElement;

    setDoEdit((prev) => !prev);
    if (expandable) {
      target.classList.add("readable");
      setDoRetract(true);
    }
  };

  const expandHandler = () => {
    const target = textRef.current as HTMLElement;
    if (target.classList.contains("readable")) {
      target.classList.remove("readable");
      setDoEdit((prev) => !prev);
      setDoRetract(false);
      setDoEdit(false);
      return;
    }
    setDoRetract(true);
    target.classList.add("readable");
  };

  return (
    <div className="outer-c">
      <div className="inner-c">
        <div className="icon-group">
          <IoMdCreate
            style={EditStyle(doEdit)}
            className="icon-group-styling"
            onClick={editCard}
          />
          <IoMdTrash className="icon-group-styling" onClick={deleteCard} />
        </div>
        <div className="cutoff-text" ref={textRef}>
          {doRetract && (
            <div className="icon-group">
              <IoMdCreate
                style={EditStyle(doEdit)}
                className="icon-group-styling"
                onClick={editCard}
              />
              <GrClose
                className="inner-c-close icon-group-styling"
                onClick={expandHandler}
              />
            </div>
          )}
          <p contentEditable={doEdit} ref={messageRef}>
            {message}
          </p>
        </div>

        {expandable && (
          <FcExpand className="expandable-icon" onClick={expandHandler} />
        )}
      </div>
    </div>
  );
};

export default Card;
