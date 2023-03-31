import { useState, useEffect } from "react";
import Card from "../components/Card";
import useClientDB from "../util/clientDB/useClientDB";

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

  if (!dbState || dbState.messages === undefined) {
    return <div>hola</div>;
  }

  return (
    <div className="content">
      {dbState.messages &&
        dbState.messages.map((message, index) => (
          <Card message={message} id={dbState.allKeys[index]} />
        ))}
    </div>
  );
};

export default Home;
