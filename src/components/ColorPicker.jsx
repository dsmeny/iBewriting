import { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./styles/ColorPicker.module.css";

const ColorPicker = ({ currentColor, editColorHandler }) => {
  const [color, setColor] = useState(currentColor);

  const colorRef = useRef();

  const clickHandler = () => {
    editColorHandler();
  };

  useEffect(() => {
    const colorTextInput = colorRef.current;
    colorTextInput.focus();

    colorTextInput.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        editColorHandler();
      }
    });
  }, []);

  const colorHandler = (e) => {
    const target = e.target;
    const value = target.value;
    setColor(value);
  };

  return (
    <div className={classes["color-container"]}>
      <AiOutlineClose onClick={clickHandler} />
      <div>
        <input
          type="color"
          className="color-inputs"
          value={color}
          onInput={colorHandler}
        />
        <input
          type="text"
          value={color}
          className="color-inputs"
          onChange={colorHandler}
          ref={colorRef}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
