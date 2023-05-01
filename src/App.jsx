import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import logo from "./images/logo.svg";
import Button from "./components/Button";
import { clear } from "./util/_cliDB.js";

const App = () => {
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
        <div>
          <Button text="clear" onClick={clickHandler} />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
