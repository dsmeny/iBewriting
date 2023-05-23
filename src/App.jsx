import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Nav from "./components/Nav";
import { clear } from "./util/_cliDB.js";

const App = () => {
  const [showClearBtn, setShowClearBtn] = useState(false);
  const [eventTrigger, setEventTrigger] = useState(false);

  const clearBtnHandler = (state) => {
    setShowClearBtn(state);
  };

  const clickHandler = () => {
    clear();
    setShowClearBtn(false);
  };

  return (
    <BrowserRouter>
      <Nav clickHandler={clickHandler} showClearBtn={showClearBtn} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              eventTrigger={eventTrigger}
              showClearBtn={showClearBtn}
              clearBtnHandler={clearBtnHandler}
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
root.render(<App />);
