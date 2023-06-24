import { useContext } from "react";
import { submitHandler } from "../util/_sidebar";
import { DbContext } from "../util/DbProvider";
import AddContent from "./AddContent";
import AddKeyWords from "./AddKeyWords";
import KeywordTags from "./KeywordTags";
import classes from "./styles/Sidebar.module.css";

const Sidebar = () => {
  const { eventTriggerHandler } = useContext(DbContext);

  return (
    <div className={classes.sidebar}>
      <AddContent
        submitHandler={(event) => submitHandler(event, eventTriggerHandler)}
      />
      <AddKeyWords />
      <KeywordTags />
    </div>
  );
};

export default Sidebar;
