import classes from "./styles/KeywordTags.module.css";
import { firstLetterCaps } from "../util/_global";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoMdTrash, IoMdCreate } from "react-icons/io";

const COUNT = 2;

const KeywordTag = ({ keyword, color }) => {
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
            <IoColorPaletteOutline className="icon-group-styling" />
            <IoMdCreate className="icon-group-styling" />
            <IoMdTrash className="icon-group-styling" />
          </ul>
        )}
      </div>
    </li>
  );
};

export default KeywordTag;
