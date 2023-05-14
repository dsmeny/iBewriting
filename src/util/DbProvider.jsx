import { useEffect, useState, createContext } from "react";

export const DbContext = createContext();

const DbProvider = ({ children }) => {
  const [dbUpdate, setDbUpdate] = useState(null);
  const [doEdit, setDoEdit] = useState(false);

  useEffect(() => {
    if (dbUpdate) {
      setDoEdit((prev) => !prev);
    }
  }, [setDbUpdate]);

  const context = {
    doEdit,
    setDbUpdate,
  };

  return <DbContext.Provider value={context}>{children}</DbContext.Provider>;
};

export default DbProvider;
