// The playground

// Arrow functions
// const name = "Nico";
// let age = 32;
// const hasHobbies = true;

// age = 33;

// const summarizeUser = (userName, userAge, userHasHobby) => {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has hobbies: " +
//     userHasHobby
//   );
// };

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

// Objects, properties & methods
const person = {
  name: "Nico",
  age: 33,
  greet() {
    console.log("Hi, I am " + this.name);
  }
};

// person.greet();

// Arrays & array methods
const hobbies = ["Running", "Golf", "Ski", "Tennis"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// console.log(hobbies.map(hobby => "Hobby: " + hobby));
// console.log(hobbies);

// Spread & rest operators
// const copiedPerson = { ...person };
// console.log(copiedPerson);

// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => args;
// console.log(toArray(1, 2, 3, 4));

// Destructuring
const printName = ({ name }) => {
  console.log(name);
};
// printName(person);

const { name, age } = person;
// console.log(name, age);

const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// Async code & promises
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done");
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);

console.log("Hello");
console.log("Hi");
