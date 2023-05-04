import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import logo from "./images/logo.svg";
import Button from "./components/Button";
import { clear } from "./util/_cliDB.js";

const App = () => {
  const [showClearBtn, setShowClearBtn] = useState(true);

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
            <img
              src={logo}
              alt="logo"
              width="190"
              height="52"
              onClick={() => setShowClearBtn(true)}
            />
          </Link>
        </div>
        {showClearBtn ? (
          <div>
            <Button text="clear" onClick={clickHandler} />
          </div>
        ) : (
          <div></div>
        )}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
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
