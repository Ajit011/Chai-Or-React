import React, { useState, useEffect, memo } from "react";

const Counter = () => {
  // 1. useState: Count store karne ke liye
  const [count, setCount] = useState(0);

  // 2. useEffect: Browser ka upar wala title change karne ke liye
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, []); // Sirf tab chalega jab count badlega

  console.log("Counter Render Hua!");

  return (
    <div className="counter-box">
      <h1>Count: {count}</h1>
      <br />
      <button onClick={() => setCount(count + 1)} className="color-btn" style={{ backgroundColor: "#333" }}>
        Increase (+1)
      </button>
    </div>
  );
};

// 3. memo: Ye line Counter ko faltu re-render hone se bachayegi
export default memo(Counter);