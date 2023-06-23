import { useContext } from "react";
import { submitHandler } from "../util/_sidebar";
import { DbContext } from "../util/DbProvider";
import AddContent from "./AddContent";
import AddKeyWords from "./AddKeyWords";
import classes from "./styles/Sidebar.module.css";

const Sidebar = () => {
  const { eventTriggerHandler } = useContext(DbContext);

  return (
    <div className={classes.sidebar}>
      <AddContent
        submitHandler={(event) => submitHandler(event, eventTriggerHandler)}
      />
      <AddKeyWords />
      <div className={classes["sidebar-keyword-list"]}>
        <h3>Keyword Tags</h3>
      </div>
    </div>
  );
};

export default Sidebar;
