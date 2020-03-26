// The playground

// Arrow functions
const name = "Nico";
let age = 32;
const hasHobbies = true;

age = 33;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
};

// console.log(summarizeUser(name, age, hasHobbies));

const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 4;

// console.log(add(4, 5));
// console.log(addOne(1));
// console.log(addRandom());

// this and function references
// https://www.youtube.com/watch?v=Pv9flm-80vM&feature=emb_logo
// This refers to what is executing the code
// Use bind to tell JS what this should be referring to in the function that will be executed
// When using arrow functions, this always refers to the object
