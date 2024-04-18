import { React, useEffect, useState } from "react";

export default function Counter() {
  const initialValue = () =>
    JSON.parse(window.localStorage.getItem("Counter_count"));
  const [count, setCount] = useState(initialValue);

  const minus = () => {
    setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  const clear = () => {
    setCount(0);
  };

  useEffect(() => {
    window.localStorage.setItem("Counter_count", count);
  }, [count]);

  return (
    <div class="container">
      <div class="header">
        Counter
        <div class="number"> {count}</div>
      </div>
      <div class="b-container">
        <button onClick={minus}>-</button>
        <button onClick={add}>+</button>
        <div class="second-row">
          <button onClick={clear}>C</button>
        </div>
      </div>
    </div>
  );
}
