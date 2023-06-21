import { IoIosAddCircleOutline } from "react-icons/io";
import { firstLetterCaps } from "../util/_global";

const Keyword = ({ keyword, color }) => {
  return (
    <li>
      <p style={{ color: `${color}` }}>{firstLetterCaps(keyword)}</p>
      <IoIosAddCircleOutline className="icon-group-styling keylist-icons" />
    </li>
  );
};

export default Keyword;
