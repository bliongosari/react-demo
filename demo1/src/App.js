import BtnFunction from "./BtnFunction";
import BtnClass from "./BtnClass";
import React, { useState } from "react";
import "./BtnClass.css";

function App() {
  const [showClass, setClass] = useState(false);
  const [count, addCounter] = useState(0);
  const [toggleClass, setToggle] = useState(true);
  return (
    <div className="app">
      <div>
        <h1> Parent Class</h1>
        <h1> Counter : {count}</h1>
        <button onClick={() => addCounter(count + 1)}> + </button>
        <button onClick={() => addCounter(count - 1)}> - </button>
      </div>
      <BtnFunction></BtnFunction>
      <button
        onClick={() => {
          setClass(true);
        }}
      >
        Lock render for children
      </button>
      <button
        onClick={() => {
          setClass(false);
        }}
      >
        Unlock render for children
      </button>
      {toggleClass && <BtnClass count={count} locked={showClass}></BtnClass>}
      {toggleClass ? (
        <button onClick={() => setToggle(false)}> Delete Class </button>
      ) : (
        <button onClick={() => setToggle(true)}> Add class </button>
      )}

      <h1> Here </h1>
    </div>
  );
}

export default App;
