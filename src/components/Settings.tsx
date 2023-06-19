import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { localStoreHandler, checkHandler } from "../util/_settings";
import { SETTINGS_STORE } from "../util/_global";
import Toggle from "./Toggle";

const Settings = ({ closeHandler }) => {
  const [settings, setSettings] = useState({});
  const [toggleID, setToggleID] = useState(null);
  const [init, setInit] = useState(false);

  const defaultConfig = {
    c1: true,
    c2: false,
    c3: false,
  };

  useEffect(() => {
    const parsedStorage = JSON.parse(localStoreHandler("get", SETTINGS_STORE));

    if (!parsedStorage) {
      localStoreHandler("set", JSON.stringify(defaultConfig));
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

      localStoreHandler("set", JSON.stringify(pStore));
      setToggleID(null);
      setSettings(() => pStore);
    }
  }, [init, toggleID]);

  return (
    <div className="settings-container">
      <div className="settings-header">
        <div className="settings-close">
          <AiOutlineClose style={{ color: "white" }} onClick={closeHandler} />
        </div>
        <ul className="settings-header-label">
          <li>Options</li>
          <li>Enable</li>
        </ul>
      </div>
      <div className="settings-options">
        <ul className="settings-options-list">
          <li>
            <p>Keyword Tags</p>
            <Toggle
              id="c1"
              isChecked={settings["c1"]}
              checkHandler={(e) => checkHandler(e, setToggleID)}
            />
          </li>
          <li>
            <p>Location</p>
            <Toggle
              id="c2"
              isChecked={settings["c2"]}
              checkHandler={(e) => checkHandler(e, setToggleID)}
            />
          </li>
          <li>
            <p>Voice</p>
            <Toggle
              id="c3"
              isChecked={settings["c3"]}
              checkHandler={(e) => checkHandler(e, setToggleID)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
