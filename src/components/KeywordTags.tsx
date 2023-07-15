import { useContext, useState } from "react";
import { KeywordListContext } from "../util/KeywordListProvider";
import classes from "./styles/KeywordTags.module.css";
import KeywordTag from "./KeywordTag";

const KeywordTags = () => {
  const { keywordList } = useContext(KeywordListContext);

  return (
    <div className={`${classes["keywordtags-container"]}`}>
      <div className={classes["keywordtags-keyword-list"]}>
        <h3>Keyword Tags</h3>
      </div>
      <ul className={`${classes["keywordtags-container-list"]}`}>
        {keywordList.map((item) => (
          <KeywordTag key={item.id} color={item.color} keyname={item.keyword} />
        ))}
      </ul>
    </div>
  );
};

export default KeywordTags;
