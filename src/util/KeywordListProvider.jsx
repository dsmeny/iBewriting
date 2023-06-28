import { useState, createContext, useEffect } from "react";
import { KEYWORDS_STORE, localStoreHandler } from "./_global";
import keywords from "../keywords.json";

export const KeywordListContext = createContext();

const KeywordListProvider = ({ children }) => {
  const [keywordList, setKeywordList] = useState([]);
  const [init, setInit] = useState(false);

  const initHandler = () => {
    setInit((prev) => !prev);
  };

  useEffect(() => {
    const parsedStorage = JSON.parse(localStoreHandler(KEYWORDS_STORE, "get"));
    const keywordListString = JSON.stringify(keywords);

    if (!parsedStorage) {
      localStoreHandler(KEYWORDS_STORE, "set", keywordListString);
      initHandler();
    }

    if (parsedStorage) {
      let temp = [];
      for (const key in parsedStorage) {
        temp.push(parsedStorage[key]);
      }
      setKeywordList(temp);
    }
  }, [init]);

  const context = {
    keywordList,
    initHandler,
  };

  return (
    <KeywordListContext.Provider value={context}>
      {children}
    </KeywordListContext.Provider>
  );
};

export default KeywordListProvider;
