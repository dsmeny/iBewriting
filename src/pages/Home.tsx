import { useState, useEffect, FormEvent } from "react";
import Card from "../components/Card";
import { v4 as uuid } from "uuid";
import { get, set, del, clear, keys, values } from "../util/clientDB/_cliDB";
import Form from "../components/Form";

const Home = () => {
  const [dbState, setDbState] = useState(null);
  const [eventTrigger, setEventTrigger] = useState(false);

  useEffect(() => {
    Promise.all([keys(), values()]).then((data) => {
      const [allKeys, messages] = data;
      setDbState({ allKeys, messages });
    });
  }, [eventTrigger]);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = (event.target as HTMLFormElement).elements["name"].value;
    set(name, uuid(name));
    setEventTrigger(() => !eventTrigger);
  }

  function deleteHandler(id) {
    del(id);
    setEventTrigger(() => !eventTrigger);
  }

  function editHandler(id, updatedMsg) {
    set(updatedMsg, id);
  }

  return (
    <div className="content">
      <div className="sidebar">
        <Form submitHandler={submitHandler} />
      </div>
      <div className="content-inner">
        {dbState && dbState.messages ? (
          dbState.messages.map((message, index) => (
            <Card
              message={message}
              id={dbState.allKeys[index]}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
              key={dbState.allKeys[index]}
            />
          ))
        ) : (
          <div>No messages found</div>
        )}
      </div>
    </div>
  );
};

export default Home;
