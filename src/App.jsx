import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" />
        </a>
      </div>
      <h1>Accessibility Mob Programming</h1>
      <div className="card">
        <h3>Clickers</h3>
        <div className="clickers">
          <div
            className="clicker"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </div>
          <button className="clicker" onClick={() => setCount(0)}>
            reset count
          </button>
        </div>
      </div>
      <p className="instructions">
        Edit <code>src/App.jsx</code> and save to update the page
      </p>
    </>
  );
}

export default App;
