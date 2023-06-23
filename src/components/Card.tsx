import { useState, useEffect, useRef, CSSProperties, useContext } from "react";
import { DbContext } from "../util/DbProvider";
import {
  editCard,
  expandCard,
  copyCard,
  duplicateCard,
  expandHandler,
} from "../util/_card";
import { deleteHandler } from "../util/_home";
import { FcExpand } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { IoMdTrash, IoMdCreate, IoMdCopy } from "react-icons/io";
import { IoDuplicateOutline } from "react-icons/io5";
import KeylistPopup from "./KeylistPopup";
import useShowCard from "./hooks/useShowCard";
import { RiPriceTag3Line } from "react-icons/ri";

const Card = ({ id, message }) => {
  const [expandable, setExpandable] = useState(false);
  const [doRetract, setDoRetract] = useState(false);
  const [doEdit, setDoEdit] = useState(false);
  const [keyword, setKeyword] = useState(null);
  const { eventTriggerHandler } = useContext(DbContext);
  const { showCard, showCardHandler } = useShowCard();

  const cardRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    expandHandler(cardRef, setExpandable);
  }, [doEdit]);

  const EditStyle = (doEdit: boolean): CSSProperties => {
    return {
      color: doEdit ? "var(--icon-edit)" : "var(--icon-color)",
    };
  };

  const keywordHandler = (key) => {
    setKeyword(key);
  };

  return (
    <div className="outer-card">
      {showCard && (
        <KeylistPopup
          showCardHandler={showCardHandler}
          keywordHandler={keywordHandler}
        />
      )}
      <div className="inner-card">
        <div className="icon-group">
          <div>
            <RiPriceTag3Line
              className="icon-group-styling"
              onClick={showCardHandler}
            />
            <p style={{ color: `${keyword ? keyword.color : "fff"}` }}>
              {keyword ? keyword.keyword : ""}
            </p>
          </div>
          <div className="icon-group-actions">
            <IoDuplicateOutline
              className="icon-group-styling"
              onClick={() => {
                duplicateCard(messageRef);
                eventTriggerHandler();
              }}
            />
            <IoMdCopy
              className="icon-group-styling copy"
              onClick={() => copyCard(messageRef)}
            />
            <IoMdCreate
              style={EditStyle(doEdit)}
              className="icon-group-styling"
              onClick={() => {
                editCard(
                  cardRef,
                  messageRef,
                  id,
                  doEdit,
                  setDoEdit,
                  expandable,
                  setDoRetract
                );
                eventTriggerHandler();
              }}
            />
            <IoMdTrash
              className="icon-group-styling"
              onClick={() => deleteHandler(id, eventTriggerHandler)}
            />
          </div>
        </div>
        <div className="cutoff-text" ref={cardRef}>
          {doRetract && (
            <div className="icon-group">
              <IoMdCreate
                style={EditStyle(doEdit)}
                className="icon-group-styling"
                onClick={() => {
                  editCard(
                    cardRef,
                    messageRef,
                    id,
                    doEdit,
                    setDoEdit,
                    expandable,
                    setDoRetract
                  );
                  eventTriggerHandler();
                }}
              />
              <GrClose
                className="inner-c-close icon-group-styling"
                onClick={() => expandCard(cardRef, setDoRetract)}
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

        {expandable && !doRetract && (
          <FcExpand
            className="expandable-icon"
            onClick={() => expandCard(cardRef, setDoRetract)}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
