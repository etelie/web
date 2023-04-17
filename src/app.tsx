import { useState } from "react";
import reactLogo from "@/assets/react.svg";
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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Under maintenance</p>
    </div>
  );
}

export const app_util = () => {
  return "x";
};

export default App;
