import { useState, useEffect } from "react";
import Card from "../components/Card";
import { submitHandler, deleteHandler, editHandler } from "../util/_home";
import { keys, values } from "../util/_cliDB";
import Form from "../components/Form";

// style={{
//   height: dbState.allKeys.length === 0 ? "75vh" : "inherited",
// }}

// {
//   dbState.allKeys.length === 0 && (
//     <div className="no-content">No content found</div>
//   );
// }

const Home = () => {
  const [dbState, setDbState] = useState(null);
  const [eventTrigger, setEventTrigger] = useState(false);

  useEffect(() => {
    Promise.all([keys(), values()]).then((data) => {
      const [allKeys, messages] = data;
      setDbState({ allKeys, messages });
    });
  }, [eventTrigger]);

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
        {dbState &&
          dbState.messages.map((message, index) => (
            <Card
              message={message}
              id={dbState.allKeys[index]}
              deleteHandler={(id) =>
                deleteHandler(id, setEventTrigger, eventTrigger)
              }
              editHandler={editHandler}
              key={dbState.allKeys[index]}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
