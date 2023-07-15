import { useState, useContext } from "react";
import { SettingsContext } from "../util/SettingsProvider";
import { KeywordListContext } from "../util/KeywordListProvider.jsx";
import { Link, useLocation } from "react-router-dom";
import classes from "./styles/KeywordTags.module.css";
import { firstLetterCaps } from "../util/_global";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoMdTrash, IoMdCreate } from "react-icons/io";
import ColorPicker from "./ColorPicker";

const COUNT = 2;

const KeywordTag = ({ keyname, color }) => {
  const { settings } = useContext(SettingsContext);
  const { keyword, setKeywordHandler } = useContext(KeywordListContext);
  const [editColor, setEditColor] = useState(false);

  const location = useLocation().pathname.replace(/\//, "");
  const { tags } = settings;

  const editColorHandler = () => {
    setEditColor((prev) => !prev);
  };

  return (
    <li className={`${classes["keytag-container"]}`}>
      <div className={`${classes["keytag-header"]}`}>
        <p style={{ opacity: `${tags ? "1" : "0.3"}` }}>
          {keyname === "all" ? 4 : COUNT}
        </p>
        <input
          type="button"
          className={`${classes["keytag-header-btn"]}`}
          style={{ color: `${color}`, opacity: `${tags ? "1" : "0.3"}` }}
          value={firstLetterCaps(keyname)}
          disabled={tags}
        />
      </div>
      <div>
        {keyname === "all" ? (
          ""
        ) : (
          <ul className={`${classes["keytag-icon-list"]}`}>
            {editColor ? (
              <ColorPicker
                currentColor="#919191"
                editColorHandler={editColorHandler}
              />
            ) : (
              <button onClick={editColorHandler} disabled={!tags}>
                <IoColorPaletteOutline className="icon-group-styling" />
              </button>
            )}
            {tags ? (
              <Link
                to={`/${keyname}`}
                className={`${classes.editIcons}`}
                onClick={() => {
                  setKeywordHandler(
                    keyword.keyword !== location ? keyname : location
                  );
                }}
              >
                <IoMdCreate name={keyname} className="icon-group-styling" />
              </Link>
            ) : (
              <IoMdCreate
                style={{ opacity: "0.5" }}
                className="icon-group-styling"
              />
            )}
            <IoMdTrash
              style={{ opacity: `${tags ? "1" : "0.5"}` }}
              className="icon-group-styling"
            />
          </ul>
        )}
      </div>
    </li>
  );
};

export default KeywordTag;
