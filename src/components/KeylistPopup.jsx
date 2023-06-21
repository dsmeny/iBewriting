import { useContext } from "react";
import { KeywordListContext } from "../util/LocalStoreProvider";
import classes from "./styles/CardPopup.module.css";
import Close from "./Close";
import Keyword from "./Keyword";

const KeylistPopup = ({ showCardHandler, keywordHandler }) => {
  const { keywordList } = useContext(KeywordListContext);

  return (
    <div className={`${classes["keylist-container"]}`}>
      <div className={`${classes["keylist-header"]}`}>
        <Close showCardHandler={showCardHandler} />
        <p>Tags</p>
      </div>
      <div className={`${classes["keylist-options"]}`}>
        <ul className={`${classes["keylist-options-list"]}`}>
          {keywordList.map((item) => (
            <Keyword
              keyword={item.keyword}
              color={item.color}
              key={item.id}
              keywordHandler={keywordHandler}
              showCardHandler={showCardHandler}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeylistPopup;
