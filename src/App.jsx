import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import logo from "../public/logo.jpeg";
import Button from "./components/Button";

const App = () => {
  return (
    <BrowserRouter>
      <header className="head">
        <div>
          <Link className="nav" to="/">
            <img src={logo} alt="logo" height="65px" width="65px" />
          </Link>
        </div>
        <div>
          <Button text="clear" />
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
