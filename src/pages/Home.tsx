import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DbProvider from "../util/DbProvider";
import Card from "../components/Card";
import { keys, values } from "../util/_cliDB";
import { submitHandler, deleteHandler, editHandler } from "../util/_home";
import Form from "../components/Form";

const Home = ({
  eventTrigger,
  showClearBtn,
  clearBtnHandler,
  setEventTrigger,
}) => {
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

  const deleteCardHandler = (id) => {
    deleteHandler(id);
    setEventTrigger((prev) => !prev);
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
      <DbProvider>
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
      </DbProvider>
      <footer className="privacy">
        <Link to="/privacy-policy">privacy policy</Link>
      </footer>
    </div>
  );
};

export default Home;
