import Button from "./Button";

const Form = ({ submitHandler }) => {
  return (
    <form id="form1" onSubmit={submitHandler}>
      <input
        id="inputField"
        type="text"
        name="name"
        className="form-input"
        autoFocus
        required
      />
      <Button type="submit" className="form-btn" text="submit" />
    </form>
  );
};

export default Form;
