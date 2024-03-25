import React from "react";

const Welcome = (props) => {
  return (
    <>
      <div>
        <h1>
          I am {props.name} {props.age}  {props.from}
        </h1>
      </div>
    </>
  );
};

export default Welcome;
