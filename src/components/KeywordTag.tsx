import classes from "./styles/KeywordTags.module.css";
import { firstLetterCaps } from "../util/_global";

const KeywordTag = ({ keyword, color }) => {
  return (
    <li>
      <p style={{ color: `${color}` }}>{firstLetterCaps(keyword)}</p>
      <div>
        <ul>
          <li>icon1</li>
          <li>icon2</li>
          <li>icon3</li>
        </ul>
      </div>
    </li>
  );
};

export default KeywordTag;
