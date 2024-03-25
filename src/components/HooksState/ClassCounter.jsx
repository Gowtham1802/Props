// import React, { Component } from "react";
//
// class ClassCounter extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       count: 0,
//     };
//   }
//   incrementCount = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//
//   render() {
//     return (
//       <div>
//         <button
//           className="w-[6rem] h-[3rem] bg-orange-200 m-10"
//           onClick={this.incrementCount}
//         >
//           Count {this.state.count}
//         </button>
//       </div>
//     );
//   }
// }
//
// export default ClassCounter;

// import React, { useState } from "react";
//
// const FunctionCounter = () => {
//   const [count, setCount] = useState(0);
//
//   const incrementCount = () => {
//     setCount(count + 1);
//   };
//
//   return (
//     <div>
//       <button
//         className="w-[6rem] h-[3rem] bg-orange-200 m-10"
//         onClick={incrementCount}
//       >
//         Count {count}
//       </button>
//     </div>
//   );
// };
//
// export default FunctionCounter;

import React, { useState } from "react";

function ClassCounter() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form action="">
        <input
          className="bg-gray-400"
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ firstName: e.target.value })}
        />
        <input
          className="bg-red-100"
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ lastName: e.target.valiue })}
        />
        <h2>Yours First Name is - {name.firstName}</h2>
        <h2>Yours Last Name is - {name.lastName}</h2>
      </form>
    </div>
  );
}

export default ClassCounter;
