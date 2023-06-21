import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DbProvider from "./util/DbProvider";
import LocalStoreProvider from "./util/LocalStoreProvider";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Nav from "./components/Nav";
import { clear } from "./util/_cliDB.js";

const App = () => {
  const [showClearBtn, setShowClearBtn] = useState(false);

  const clearBtnHandler = (state) => {
    setShowClearBtn(state);
  };

  const clearHandler = () => {
    clear();
    setShowClearBtn(false);
  };

  return (
    <BrowserRouter>
      <Nav clearHandler={clearHandler} showClearBtn={showClearBtn} />
      <Routes>
        <Route
          path="/"
          element={
            <DbProvider>
              <LocalStoreProvider>
                <Home
                  showClearBtn={showClearBtn}
                  clearBtnHandler={clearBtnHandler}
                />
              </LocalStoreProvider>
            </DbProvider>
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
