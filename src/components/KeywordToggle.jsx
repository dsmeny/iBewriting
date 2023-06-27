import classes from "./styles/Toggle.module.css";

const KeywordToggle = ({ isChecked, setIsChecked }) => {
  return (
    <label className={classes.switch}>
      <input
        type="checkbox"
        className="checkboxes"
        onChange={() => setIsChecked((prev) => !prev)}
        checked={isChecked ? isChecked : false}
      />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  );
};

export default KeywordToggle;
