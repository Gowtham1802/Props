// import React from "react";
// 
// const Person = (person) => {
//   return (
//     <h1>
//       I am {person.name}. I am {person.age} years old. I know {person.skill}
//     </h1>
//   );
// };
// 
// export default Person;



import React from "react";

const Person = ({ name, age, skill }) => {
  return (
    <h1>
      I am {name}. I am {age} years old. I know {skill}.
    </h1>
  );
};

export default Person;

