import { useState } from "react";

// Hvad er fejlen her og hvordan løses den?
// brug setCount i stedet for

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount (count + 1)
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>CLICK ME!</button>
    </div>
  );
};

export default Counter;
