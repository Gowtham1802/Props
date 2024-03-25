import Person from "./person";

const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "Abi",
      age: 21,
      skill: "HTML5",
    },
    {
      id: 1,
      name: "Bala",
      age: 22,
      skill: "CSS3",
    },
    {
      id: 1,
      name: "Gowtham",
      age: 23,
      skill: "JavaScript",
    },
    {
      id: 1,
      name: "Naveen",
      age: 24,
      skill: "ReactJS",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.name} {...person} />
  ));
  return (
    <div>
      <h1>{personList}</h1>
    </div>
  );
};

export default NameList;

// import React from "react";
// import Person from "./person";
//
// const NameList = () => {
//   const persons = [
//     {
//       id: 1,
//       name: "Abi",
//       age: 21,
//       skill: "HTML5",
//     },
//     {
//       id: 2,
//       name: "Bala",
//       age: 22,
//       skill: "CSS3",
//     },
//     {
//       id: 3,
//       name: "Gowtham",
//       age: 23,
//       skill: "JavaScript",
//     },
//     {
//       id: 4,
//       name: "Naveen",
//       age: 24,
//       skill: "ReactJS",
//     },
//   ];
//
//   const personList = persons.map((person) => (
//     <Person key={person.id} {...person} />
//   ));
//
//   return (
//     <div>
//       <h1>{personList}</h1>
//     </div>
//   );
// };
//
// export default NameList;
