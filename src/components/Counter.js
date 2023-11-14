import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((currentCount) => count + 1);
    setCount((currentCount) => count + 1);
  }

  return <div onClick={increment}>{count} times</div>;
}

export default Counter;
