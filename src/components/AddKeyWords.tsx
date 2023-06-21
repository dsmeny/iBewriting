import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiPriceTag3Line } from "react-icons/ri";

const AddKeyWords = () => {
  return (
    <div className="addkeywords">
      <div>
        <RiPriceTag3Line
          style={{ color: "var(--bg-popup-color)" }}
          className="icon-group-styling keylist-icons"
        />
        <input
          className="addkeywords-text"
          type="text"
          placeholder="Add a keyword tag"
        />
      </div>
      <IoIosAddCircleOutline className="icon-group-styling keylist-icons" />
    </div>
  );
};

export default AddKeyWords;
