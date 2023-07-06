import { useContext, useEffect, useState } from "react";
import { KeywordListContext } from "../util/KeywordListProvider";
import { useLocation } from "react-router-dom";
import { keywordMatchHandler } from "../util/_keywordPage";
import KeywordCard from "../components/KeywordCard";
import classes from "../components/styles/KeywordPage.module.css";

const KeywordPage = () => {
  const { keywordList, initHandler, showKeyCard } =
    useContext(KeywordListContext);
  const [keyword, setKeyword] = useState({});
  const [isChecked, setIsChecked] = useState(true);
  const location = useLocation().pathname.slice(1);

  useEffect(() => {
    const cardContainer = document.querySelector(
      `.${classes["keyword-card-container"]}`
    );
  }, []);

  useEffect(() => {
    if (!keywordList) {
      initHandler();
    }
    keywordMatchHandler(keywordList, location, setKeyword);
  }, [location, keyword, initHandler]);

  return (
    <div className={classes["keyword-page-container"]}>
      {showKeyCard ? (
        <KeywordCard
          keyword={keyword}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      ) : (
        <p>Keycards</p>
      )}
    </div>
  );
};

export default KeywordPage;
