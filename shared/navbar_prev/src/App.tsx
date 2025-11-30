import ReactDOM from "react-dom/client";

import "./index.css";

import Navbar from "./Navbar";

const App = () => (
  <div className="">
    <Navbar />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
