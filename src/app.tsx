import { useState } from "react";
import etelieLogo from "/icon/etelie.svg";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://etelie.com" target="_blank" rel="noreferrer">
          <img src={etelieLogo} className="logo" alt="Etelie logo" />
        </a>
      </div>
      <h1>etelie.com</h1>
      <p className="read-the-docs">Under maintenance</p>
    </div>
  );
}

export const app_util = () => {
  return "x";
};

export default App;
