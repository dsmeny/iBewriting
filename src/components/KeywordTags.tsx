import { useContext } from "react";
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
          <KeywordTag keyword={item.keyword} color={item.color} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default KeywordTags;
