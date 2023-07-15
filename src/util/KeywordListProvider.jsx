import { useState, createContext, useEffect } from "react";
import { KEYWORDS_STORE, KEYWORD_STORE, localStoreHandler } from "./_global";
import keywords from "../keywords.json";

export const KeywordListContext = createContext();

const KeywordListProvider = ({ children }) => {
  const [keywordList, setKeywordList] = useState([]);
  const [init, setInit] = useState(false);
  const [keyword, setKeyword] = useState({ [KEYWORD_STORE]: "all" });

  const initHandler = () => {
    setInit((prev) => !prev);
  };

  const setKeywordHandler = (key) => {
    setKeyword({ [KEYWORD_STORE]: key });
  };

  useEffect(() => {
    const parsedStorage = JSON.parse(localStoreHandler(KEYWORDS_STORE, "get"));
    const parsedKeyword = JSON.parse(localStoreHandler(KEYWORD_STORE, "get"));
    const keywordListString = JSON.stringify(keywords);

    if (!parsedStorage) {
      localStoreHandler(KEYWORDS_STORE, "set", keywordListString);
      initHandler();
    }
    if (!parsedKeyword) {
      const keywordString = JSON.stringify(keyword);
      localStoreHandler(KEYWORD_STORE, "set", keywordString);
      initHandler();
    }
    if (parsedStorage) {
      let temp = [];
      for (const key in parsedStorage) {
        temp.push(parsedStorage[key]);
      }
      setKeywordList(temp);
    }
    if (parsedKeyword) {
      setKeyword(parsedKeyword);
    }
  }, [init]);

  const context = {
    keywordList,
    initHandler,
    keyword,
    setKeywordHandler,
  };

  return (
    <KeywordListContext.Provider value={context}>
      {children}
    </KeywordListContext.Provider>
  );
};

export default KeywordListProvider;
