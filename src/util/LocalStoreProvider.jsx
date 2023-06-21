import { useState, createContext, useEffect } from "react";
import { KEYWORDS_STORE, localStoreHandler } from "./_global";
import keywords from "../keywords.json";

export const KeywordListContext = createContext();

const LocalStoreProvider = ({ children }) => {
  const [keywordList, setKeywordList] = useState([]);
  const [init, setInit] = useState(false);

  useEffect(() => {
    const parsedStorage = JSON.parse(localStoreHandler(KEYWORDS_STORE, "get"));
    const keywordListString = JSON.stringify(keywords);

    if (!parsedStorage) {
      localStoreHandler(KEYWORDS_STORE, "set", keywordListString);
      setInit((prev) => !prev);
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
  };

  return (
    <KeywordListContext.Provider value={context}>
      {children}
    </KeywordListContext.Provider>
  );
};

export default LocalStoreProvider;
