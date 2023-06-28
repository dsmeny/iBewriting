import { useState, createContext, useEffect } from "react";
import { SETTINGS_STORE, localStoreHandler } from "./_global";

export const SettingsContext = createContext();

export const defaultConfig = {
  tags: true,
  location: false,
  voice: false,
};

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({});
  const [toggleID, setToggleID] = useState(null);
  const [init, setInit] = useState(false);

  const checkHandler = (e) => {
    const target = e.target;
    const id = target.id;

    setToggleID(() => {
      return {
        [`${id}`]: target.checked,
      };
    });
  };

  useEffect(() => {
    const parsedStorage = JSON.parse(localStoreHandler(SETTINGS_STORE, "get"));

    if (!parsedStorage) {
      localStoreHandler(SETTINGS_STORE, "set", JSON.stringify(defaultConfig));
      setSettings(() => defaultConfig);
      setInit((prev) => !prev);
    }

    if (parsedStorage && !toggleID) {
      setSettings(() => parsedStorage);
    }

    if (parsedStorage && toggleID) {
      const key = Object.keys(toggleID);
      const value = Object.values(toggleID);
      const pStore = { ...parsedStorage, [`${key[0]}`]: value[0] };

      localStoreHandler(SETTINGS_STORE, "set", JSON.stringify(pStore));
      setToggleID(null);
      setSettings(() => pStore);
    }
  }, [init, toggleID]);

  const context = {
    settings,
    checkHandler,
  };

  return (
    <SettingsContext.Provider value={context}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
