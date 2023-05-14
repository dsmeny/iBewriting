import { useState, useEffect, useRef, CSSProperties, useContext } from "react";
import { DbContext } from "../util/DbProvider";
import {
  editCard,
  expandCard,
  copyCard,
  duplicateCard,
  effectHandler,
} from "../util/_card";
import { FcExpand } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { IoMdTrash, IoMdCreate, IoMdCopy } from "react-icons/io";
import { IoDuplicateOutline } from "react-icons/io5";

const Card = ({ id, message, deleteHandler, editHandler }) => {
  const [expandable, setExpandable] = useState(false);
  const [doRetract, setDoRetract] = useState(false);
  const { doEdit, setDbUpdate } = useContext(DbContext);

  const textRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    effectHandler(textRef, messageRef, setExpandable, doEdit, editHandler, id);
  }, [doEdit]);

  const EditStyle = (doEdit: boolean): CSSProperties => {
    return {
      color: doEdit ? "var(--icon-edit)" : "var(--icon-color)",
    };
  };

  return (
    <div className="outer-c">
      <div className="inner-c">
        <div className="icon-group">
          <IoDuplicateOutline
            className="icon-group-styling"
            onClick={() => duplicateCard(messageRef)}
          />
          <IoMdCopy className="icon-group-styling copy" onClick={copyCard} />
          <IoMdCreate
            style={EditStyle(doEdit)}
            className="icon-group-styling"
            onClick={() =>
              editCard(textRef, doEdit, setDbUpdate, expandable, setDoRetract)
            }
          />
          <IoMdTrash
            className="icon-group-styling"
            onClick={() => deleteHandler(id)}
          />
        </div>
        <div className="cutoff-text" ref={textRef}>
          {doRetract && (
            <div className="icon-group">
              <IoMdCreate
                style={EditStyle(doEdit)}
                className="icon-group-styling"
                onClick={() =>
                  editCard(
                    textRef,
                    doEdit,
                    setDbUpdate,
                    expandable,
                    setDoRetract
                  )
                }
              />
              <GrClose
                className="inner-c-close icon-group-styling"
                onClick={() => expandCard(textRef, setDoEdit, setDoRetract)}
              />
            </div>
          )}
          <p
            className="cutoff-text-p"
            contentEditable={doEdit}
            ref={messageRef}
          >
            {message}
          </p>
        </div>

        {expandable && (
          <FcExpand
            className="expandable-icon"
            onClick={() => expandCard(textRef, setDoEdit, setDoRetract)}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
