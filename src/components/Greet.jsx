import React from "react";

const Greet = (props) => {
  console.log(props);
  return (
    <>
      <div>
        <h1>
          I am {props.name} {props.age} {props.from}
        </h1>
        {props.children}
      </div>
    </>
  );
};

export default Greet;
