import { useContext, useEffect, useState } from "react";
import { KeywordListContext } from "../util/KeywordListProvider";
import { useLocation } from "react-router-dom";
import KeywordCard from "../components/KeywordCard";
import classes from "../components/styles/KeywordPage.module.css";

const KeywordPage = () => {
  const { keywordList, initHandler, keyword } = useContext(KeywordListContext);
  const [isChecked, setIsChecked] = useState(true);
  const [keyObj, setKeyObj] = useState({});
  const [editCard, setEditCard] = useState(true);
  const location = useLocation().pathname.slice(1);

  useEffect(() => {
    if (!keywordList) {
      const key = keywordList.find((item) => item.keyword === keyword.keyword);
      setKeyObj(key);
      initHandler();
    }

    if (location === keyword.keyword) {
      setEditCard((prev) => !prev);
    }
  }, [location, keyword, initHandler]);

  return (
    <div className={classes["keyword-page-container"]}>
      {keyword.keyword !== location ? (
        <KeywordCard
          keyword={keyObj}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      ) : editCard ? (
        <KeywordCard
          keyword={keyObj}
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
