//first
// const s = "apple";

// s = "car";

// console.log(s.substring(0,3));

//second

// console.log(s.lastIndexOf("p"));

//third
// console.log(s.slice(0, 3));

// console.log(s.slice(-3));

// console.log(s.substring(-3));

//fourth
//start //length
// console.log(s.substr(2, 2));

//fifth

// console.log(s.replace(s, "car"));

//sixth
// console.log(s.toLowerCase());

// console.log(s.toUpperCase());

//seven

// console.log(s.concat(" ","mango"," ","mango"," ","mango","mango","mango"));

//eigth

// console.log(s);
// console.log(s.trim());

// const x = 12.355;

// console.log(x.toFixed(1));

//() / "/"  / * / + / -

//Data types

//1. Primitive
// Number, String, undefined, null, BigInt, Symbol, Boolean

//2. Non-primitive
// functions, arrays

// console.log(typeof true);

// const object = {
//   //key    // value
//   name: false,
//   college: 1,
//   var: "random",
// };

// console.log(object.name);

//plus sign alwys prefers string addition operation

// let s = 10 + 10;

//minus operation always prefers calculation
// let s = "shivanshu" - 10;

//it was expecting a number but did not succeed
// console.log(typeof NaN); // Not a number

//coercion

//checks data type as well as value
// if (1 == "1") {
//   console.log(true);
// }

//checks data type as well as value
// if (1 === "1") {
//   console.log(true);
// } else {
//   console.log(false);
// }

//traditional
// function apple(parameter) {
//   console.log(parameter);
// }

//arrow
// const apple = () => {
//   console.log("Apple");
// };

// apple(37);

(function apple(parameter) {
  console.log(parameter);
})("Apple");
