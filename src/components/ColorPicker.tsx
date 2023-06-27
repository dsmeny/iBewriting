import { useState } from "react";

const ColorPicker = ({ currentColor }) => {
  const [color, setColor] = useState(currentColor);

  const colorHandler = (e) => {
    const target = e.target;
    const value = target.value;
    setColor(value);
  };

  return (
    <div>
      <input
        type="color"
        value={color}
        onInput={colorHandler}
        onChange={colorHandler}
      />
    </div>
  );
};

export default ColorPicker;
