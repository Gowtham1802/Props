// import React, { Component } from "react";
// import ChildComponent from "./ChildComponent";
//
// class ParentComponent extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       parentName: "Gowtham",
//     };
//
//     this.greetParent = this.greetParent.bind(this);
//   }
//
//   greetParent(childName) {
//     alert(`Hello ${this.state.parentName} ${childName}`);
//   }
//
//   render() {
//     return (
//       <div>
//         <ChildComponent greetHandler={this.greetParent} />
//       </div>
//     );
//   }
// }
//
// export default ParentComponent;

import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [parentName, setParentName] = useState("Gowtham");

  const greetParent = (childName) => {
    // setParentName(childName);
    alert(`Hello ${parentName} ${childName}`);
  };
  console.log("parentName=>", parentName);
  return (
    <>
      {/* <div>{parentName}</div> */}
      <ChildComponent
        // setParentName={setParentName}
        greetHandler={greetParent}
      />
    </>
  );
};

export default ParentComponent;
