import { useContext, useEffect, useState } from "react";
import { KeywordListContext } from "../util/LocalStoreProvider";
import { firstLetterCaps } from "../util/_global";
import { useLocation } from "react-router-dom";
import classes from "../components/styles/CardPopup.module.css";
import Toggle from "../components/Toggle";

const keywordMatchHandler = (keywordArr, location, setKeyword) => {
  if (keywordArr.some((entry) => entry.keyword === location)) {
    setKeyword(() => keywordArr.find((entry) => entry.keyword === location));
  }
};

const KeywordPage = () => {
  const { keywordList, initHandler } = useContext(KeywordListContext);
  const [keyword, setKeyword] = useState({});
  const location = useLocation().pathname.slice(1);

  useEffect(() => {
    if (!keywordList) {
      initHandler();
    }
    keywordMatchHandler(keywordList, location, setKeyword);
  }, [location, keyword, initHandler]);

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
            <div className={classes["keyword-card-label"]}>
              <p>Use keyword</p>
              <Toggle />
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

export default KeywordPage;
