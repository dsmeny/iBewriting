import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useDBstate, DatabaseContextProvider } from "./util/useDBstate";

import Home from "./pages/Home";
import { keys, values } from "./util/_cliDB";
import Privacy from "./pages/Privacy";
import logo from "./images/logo.svg";
import Button from "./components/Button";
import { clear } from "./util/_cliDB.js";

const App = () => {
  const [showClearBtn, setShowClearBtn] = useState(true);
  const [eventTrigger, setEventTrigger] = useState(false);
  const [dbState, setDbState] = useDBstate();

  useEffect(() => {
    Promise.all([keys(), values()]).then((data) => {
      const [allKeys, messages] = data;
      if (allKeys.length) {
        setDbState({ allKeys, messages });
        return;
      }
    });
  }, [eventTrigger]);

  const clearBtnHandler = () => {
    setShowClearBtn(false);
  };

  const clickHandler = () => {
    clear();
    window.location.reload();
  };

  return (
    <BrowserRouter>
      <header className="head">
        <div>
          <Link className="nav" to="/">
            <img src={logo} alt="logo" width="190" height="52" />
          </Link>
        </div>
        {showClearBtn || dbState ? (
          <div>
            <Button text="clear" onClick={clickHandler} />
          </div>
        ) : (
          <div></div>
        )}
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              dbState={dbState}
              setDbState={setDbState}
              eventTrigger={eventTrigger}
              setEventTrigger={setEventTrigger}
            />
          }
        />
        <Route
          path="/privacy-policy"
          element={<Privacy clearBtnHandler={clearBtnHandler} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <DatabaseContextProvider>
    <App />
  </DatabaseContextProvider>
);
