import { useContext } from "react";
import { submitHandler } from "../util/_sidebar";
import { DbContext } from "../util/DbProvider";
import Form from "../components/Form";

const Sidebar = () => {
  const { eventTrigger, eventTriggerHandler } = useContext(DbContext);

  return (
    <div className="sidebar">
      <Form
        submitHandler={(event) => submitHandler(event, eventTriggerHandler)}
      />
    </div>
  );
};

export default Sidebar;
