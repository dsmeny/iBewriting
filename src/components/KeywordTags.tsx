import { useContext } from "react";
import { KeywordListContext } from "../util/LocalStoreProvider";
import classes from "./styles/KeywordTags.module.css";
import KeywordTag from "./KeywordTag";

const COUNT = 2;

const KeywordTags = () => {
  const { keywordList } = useContext(KeywordListContext);
  return (
    <div className={`${classes["keylist-container"]}`}>
      <div className={`${classes["keylist-header"]}`}>
        <p>{COUNT}</p>
        <p>Tags</p>
      </div>
      <div className={`${classes["keylist-options"]}`}>
        <ul className={`${classes["keylist-options-list"]}`}>
          {keywordList.map((item) => (
            <KeywordTag
              keyword={item.keyword}
              color={item.color}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeywordTags;
