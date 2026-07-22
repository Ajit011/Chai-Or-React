import React, { useState } from "react";

const App = () => {
    console.log("render");
  const [color, setColor] = useState("olive");

  return (
    // Dynamic color ke liye inline style, baaki styling index.css se
    <div className="app-container" style={{ backgroundColor: color }}>
      
      <div className="bottom-bar">
        <div className="button-container">
          
          <button
            onClick={() => setColor("red")}
            className="color-btn"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="color-btn"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="color-btn"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

        </div>
      </div>
    </div>
  );
};

export default App;