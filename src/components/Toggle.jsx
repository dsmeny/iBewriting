import classes from "./styles/Toggle.module.css";

const Toggle = ({ id, isChecked, checkHandler }) => {
  return (
    <label className={classes.switch}>
      <input
        id={id}
        type="checkbox"
        className="checkboxes"
        onChange={checkHandler}
        checked={isChecked ? isChecked : false}
      />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  );
};

export default Toggle;
