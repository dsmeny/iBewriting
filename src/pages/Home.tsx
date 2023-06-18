import { useState, useEffect, useContext } from "react";
import { DbContext } from "../util/DbProvider";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { keys, values } from "../util/_cliDB";
import { submitHandler } from "../util/_home";
import Form from "../components/Form";

const Home = ({ showClearBtn, clearBtnHandler }) => {
  const { eventTrigger, eventTriggerHandler } = useContext(DbContext);
  const [dbState, setDbState] = useState(null);

  useEffect(() => {
    Promise.all([keys(), values()]).then((data) => {
      const [allKeys, messages] = data;

      if (!allKeys.length) {
        setDbState(null);
        clearBtnHandler(false);
        return;
      }

      clearBtnHandler(true);
      setDbState({ allKeys, messages });
    });
  }, [eventTrigger, showClearBtn]);

  return (
    <div className="home-content">
      <div className="sidebar">
        <Form
          submitHandler={(event) => submitHandler(event, eventTriggerHandler)}
        />
      </div>

      <div className="home-content-inner">
        {!dbState && <div className="nomessage">No notes</div>}
        {dbState &&
          dbState.messages.map((message, index) => (
            <Card
              message={message}
              id={dbState.allKeys[index]}
              key={dbState.allKeys[index]}
            />
          ))}
      </div>

      <footer className="privacy">
        <Link to="/privacy-policy">privacy policy</Link>
      </footer>
    </div>
  );
};

export default Home;
