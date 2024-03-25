import React, { Component, useState } from "react";

// class UserGreeting extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       isLoggedIn: true,
//     };
//   }
//
//   render() {
//     if (this.state.isLoggedIn) {
//       return <div>Welcome Gowtham</div>;
//     } else {
//       return <div>Welcome Naveen</div>;
//     }
//     // return (
//     //   <div>
//     //     <div>Hello Gowtham</div>
//     //     <div>Hello All</div>
//     //   </div>
//     // );
//   }
// }
//
// export default UserGreeting;

const UserGreeting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const name = isLoggedIn ? "Gowtham" : "Naveen";

  const setName = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <div>Hello {name}</div>
      <div onClick={setName}>Hello </div>
    </div>
  );
};

export default UserGreeting;

// import React, { useState } from "react";

// const UserGreeting = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//
//   const name = isLoggedIn ? "Gowtham" : "Naveen";
//
//   const setName = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };
//
//   return (
//     <div>
//       <div>Welcome {name}</div>
//       <button onClick={setName}>Toggle User</button>
//     </div>
//   );
// };
//
// export default UserGreeting;
