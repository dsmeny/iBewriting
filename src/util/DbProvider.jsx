import { useState, createContext, useEffect } from "react";

export const DbContext = createContext();

const DbProvider = ({ children }) => {
  const [eventTrigger, setEventTrigger] = useState(false);

  const eventTriggerHandler = () => {
    setEventTrigger((prev) => !prev);
  };
  const context = {
    eventTrigger,
    eventTriggerHandler,
  };

  return <DbContext.Provider value={context}>{children}</DbContext.Provider>;
};

export default DbProvider;
