import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./styles/KeywordTags.module.css";
import { firstLetterCaps } from "../util/_global";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoMdTrash, IoMdCreate } from "react-icons/io";
import ColorPicker from "./ColorPicker";

const COUNT = 2;

const KeywordTag = ({ keyword, color }) => {
  const [editColor, setEditColor] = useState(false);

  const editColorHandler = () => {
    setEditColor((prev) => !prev);
  };

  return (
    <li className={`${classes["keytag-container"]}`}>
      <div className={`${classes["keytag-header"]}`}>
        <p>{keyword === "all" ? 4 : COUNT}</p>
        <p style={{ color: `${color}` }}>{firstLetterCaps(keyword)}</p>
      </div>
      <div>
        {keyword === "all" ? (
          ""
        ) : (
          <ul className={`${classes["keytag-icon-list"]}`}>
            {editColor ? (
              <ColorPicker />
            ) : (
              <IoColorPaletteOutline
                className="icon-group-styling"
                onClick={editColorHandler}
              />
            )}

            <Link to={`/${keyword}`}>
              <IoMdCreate className="icon-group-styling" />
            </Link>
            <IoMdTrash className="icon-group-styling" />
          </ul>
        )}
      </div>
    </li>
  );
};

export default KeywordTag;
