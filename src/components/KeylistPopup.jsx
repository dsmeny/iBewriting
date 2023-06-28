import { useContext, useMemo } from "react";
import { KeywordListContext } from "../util/KeywordListProvider";
import classes from "./styles/CardPopup.module.css";
import Close from "./Close";
import Keyword from "./Keyword";

const KeylistPopup = ({ showCardHandler, keywordHandler }) => {
  const { keywordList } = useContext(KeywordListContext);

  const keywordListModi = useMemo(() => keywordList.slice(1), [keywordList]);

  return (
    <div className={`${classes["keylist-container"]}`}>
      <div className={`${classes["keylist-header"]}`}>
        <Close showCardHandler={showCardHandler} />
        <p>Tags</p>
      </div>
      <div className={`${classes["keylist-options"]}`}>
        <ul className={`${classes["keylist-options-list"]}`}>
          {keywordListModi.map((item) => (
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
