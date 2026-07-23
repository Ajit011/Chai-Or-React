import React, { useState } from "react";
import Counter from "./Counter";
import "./index.css";

const App = () => {
  // 1. useState: Background color store karne ke liye
  const [color, setColor] = useState("olive");

  console.log("App Render Hua! (Color change hua)");

  return (
    <div className="app-container" style={{ backgroundColor: color }}>
      
      {/* Hamara Counter component */}
      <Counter />

      {/* Color change karne wale buttons */}
      <div className="bottom-bar">
        <div className="button-container">
          <button onClick={() => setColor("red")} className="color-btn" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className="color-btn" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("blue")} className="color-btn" style={{ backgroundColor: "blue" }}>Blue</button>
        </div>
      </div>
      
    </div>
  );
};

export default App;