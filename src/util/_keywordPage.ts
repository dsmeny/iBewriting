export const keywordMatchHandler = (keywordArr, location, setKeyword) => {
  if (keywordArr.some((entry) => entry.keyword === location)) {
    setKeyword(() => keywordArr.find((entry) => entry.keyword === location));
  }
};
