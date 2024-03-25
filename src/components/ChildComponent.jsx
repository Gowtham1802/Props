import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button
        className="w-[6rem] h-[3rem] bg-gray-400 m-10"
        onClick={() => props.greetHandler("I am Naveen")}
      >
        Click Here !
      </button>
    </div>
  );
}

export default ChildComponent;
