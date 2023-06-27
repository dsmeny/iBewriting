import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { DbContext } from "../util/DbProvider";
import Card from "../components/Card";
import { keys, values } from "../util/_cliDB";

const Home = ({ showClearBtn, clearBtnHandler }) => {
  const { eventTrigger } = useContext(DbContext);
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
    <div style={{ width: "100%" }}>
      <div className="home-content">
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
