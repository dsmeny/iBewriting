import { useContext, useEffect, useState } from "react";
import { KeywordListContext } from "../util/KeywordListProvider";
import { firstLetterCaps } from "../util/_global";
import { useLocation } from "react-router-dom";
import { keywordMatchHandler } from "../util/_keywordPage";
import KeywordToggle from "../components/KeywordToggle";
import classes from "../components/styles/CardPopup.module.css";

const KeywordPage = () => {
  const { keywordList, initHandler } = useContext(KeywordListContext);
  const [keyword, setKeyword] = useState({});
  const [isChecked, setIsChecked] = useState(true);
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

export default KeywordPage;
