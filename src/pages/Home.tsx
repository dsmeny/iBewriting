import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { submitHandler, deleteHandler, editHandler } from "../util/_home";
import { keys, values } from "../util/_cliDB";
import Form from "../components/Form";

const Home = () => {
  const [dbState, setDbState] = useState(null);
  const [eventTrigger, setEventTrigger] = useState(false);

  useEffect(() => {
    Promise.all([keys(), values()]).then((data) => {
      const [allKeys, messages] = data;
      if (allKeys.length) {
        setDbState({ allKeys, messages });
        return;
      }

      setDbState(null);
    });
  }, [eventTrigger]);

  const deleteCardHandler = (id) => {
    deleteHandler(id, setEventTrigger, eventTrigger);
  };

  return (
    <div className="content">
      <div className="sidebar">
        <Form
          submitHandler={(event) =>
            submitHandler(event, setEventTrigger, eventTrigger)
          }
        />
      </div>
      <div className="content-inner">
        {!dbState && <div className="nomessage">No notes</div>}
        {dbState &&
          dbState.messages.map((message, index) => (
            <Card
              message={message}
              id={dbState.allKeys[index]}
              deleteHandler={deleteCardHandler}
              editHandler={editHandler}
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
