import classes from "./styles/Toggle.module.css";

const Toggle = ({ id, checkHandler }) => {
  return (
    <label className={classes.switch}>
      <input id={id} type="checkbox" onChange={checkHandler} />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  );
};

export default Toggle;
