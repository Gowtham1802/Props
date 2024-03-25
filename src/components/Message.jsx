import { useState } from "react";
import React from "react";

const Message = () => {
  const [count, setCount] = useState(0);
  const decrementCount = () => {
    setCount((ps) => ps - 1);
    setCount((ps) => ps - 1);
    setCount((ps) => ps - 1);
  };
  const incrementCount = () => {
    setCount((ps) => ps + 1);
    setCount((ps) => ps + 1);
    setCount((ps) => ps + 1);
  };
  return (
    <>
      <div className="">
        {/* <h1>I am Gowtham</h1> */}
        <button
          className="w-[3rem] h-[3rem] bg-gray-400 m-10"
          onClick={decrementCount}
        >
          -
        </button>
        <span>{count}</span>
        <button
          className="w-[3rem] h-[3rem] bg-gray-400 m-10"
          onClick={incrementCount}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Message;
