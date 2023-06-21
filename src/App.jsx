import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DbProvider from "./util/DbProvider";
import LocalStoreProvider from "./util/LocalStoreProvider";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
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
      <DbProvider>
        <LocalStoreProvider>
          <div className="container">
            <Nav clearHandler={clearHandler} showClearBtn={showClearBtn} />
            <div className="container-inner">
              <Sidebar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      showClearBtn={showClearBtn}
                      clearBtnHandler={clearBtnHandler}
                    />
                  }
                />
                <Route
                  path="/privacy-policy"
                  element={<Privacy clearBtnHandler={clearBtnHandler} />}
                />
              </Routes>
            </div>
          </div>
        </LocalStoreProvider>
      </DbProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
