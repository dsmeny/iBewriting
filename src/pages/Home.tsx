import { useState, useEffect } from "react";
import Card from "../components/Card";
import useClientDB from "../util/clientDB/useClientDB";
import Form from "../components/Form";

const Home = () => {
  const [dbState, setDbState] = useState(null);

  const { state, setDB, getKey, delDB, clearDB, getKeys, getValues } =
    useClientDB();

  useEffect(() => {
    const getMessages = async () => {
      const [messages, allKeys] = await Promise.all([getValues(), getKeys()]);

      setDbState({ messages, allKeys });
    };

    getMessages();
  }, []);

  return (
    <div className="content">
      <Form />
      {dbState && dbState.messages ? (
        dbState.messages.map((message, index) => (
          <Card message={message} id={dbState.allKeys[index]} />
        ))
      ) : (
        <div>No messages found</div>
      )}
    </div>
  );
};

export default Home;
