import React from "react";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    if (counter >= 0 && counter < 11) {
      setCounter(counter + 1);
    }
  };

  const handleSubstract = () => {
    if (counter <= 11 && counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleRest = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>Counter App</h1>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleRest}>Reset</button>
      <p>{counter}</p>
    </>
  );
};
