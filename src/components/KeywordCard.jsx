import React from "react";
import { firstLetterCaps } from "../util/_global";
import KeywordToggle from "./KeywordToggle";
import classes from "./styles/CardPopup.module.css";

const KeywordCard = ({ keyword, isChecked, setIsChecked }) => {
  return (
    <div className={classes["keyword-card-container"]}>
      {keyword["keyword"] ? (
        <div className={classes["keyword-card"]}>
          <div className={classes["keyword-card-header"]}>
            <div className={classes["keyword-card-label"]}>
              <p>Keyword</p>
              <p style={{ color: keyword["color"] }}>
                {firstLetterCaps(keyword["keyword"])}
              </p>
            </div>
            <div
              className={`${classes["keyword-card-label"]} ${classes.flexEnd}`}
            >
              <p>Use Keyword</p>
              <KeywordToggle
                isChecked={isChecked}
                setIsChecked={setIsChecked}
              />
            </div>
          </div>
          <div className={classes["keyword-card-description"]}>
            <div className={classes["keyword-card-label"]}>
              <p>Description</p>
              <p>{keyword["description"]}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default KeywordCard;
