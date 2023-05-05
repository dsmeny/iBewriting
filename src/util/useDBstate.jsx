import { useEffect, useState, createContext, useContext } from "react";

const dbcontext = createContext();

export const DatabaseContextProvider = (props) => {
  const [dbState, setDbState] = useState(null);

  const context = {
    dbState,
    setDbState,
  };

  return <DatabaseContextProvider.Provider value={context} {...props} />;
};

export const useDBstate = () => {
  const [dbState, setDbState] = useContext(dbcontext);
  return { dbState, setDbState };
};
