import { useContext, useMemo } from "react";
import { SettingsContext, defaultConfig } from "../util/SettingsProvider";
import Toggle from "./Toggle";
import Close from "./Close";

const Settings = ({ showCardHandler }) => {
  const { settings, checkHandler } = useContext(SettingsContext);

  const [tags, location, voice] = useMemo(
    () => Object.keys(defaultConfig),
    [defaultConfig]
  );

  return (
    <div className="settings-container">
      <div className="settings-header">
        <Close showCardHandler={showCardHandler} />
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
              id={tags}
              isChecked={settings["tags"]}
              checkHandler={checkHandler}
            />
          </li>
          <li>
            <p>Location</p>
            <Toggle
              id={location}
              isChecked={settings["location"]}
              checkHandler={checkHandler}
            />
          </li>
          <li>
            <p>Voice</p>
            <Toggle
              id={voice}
              isChecked={settings["voice"]}
              checkHandler={checkHandler}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
