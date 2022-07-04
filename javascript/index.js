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
// const apple = (params) => {
//   console.log(params);
// };

// apple("apple");

// (function apple(parameter) {
//   console.log(parameter);
// })("Apple");

// Functions
// Functions are the vip's in js

// Function can be assignd to a variable
// function can be returned from the function
// function can be passed to another function - Callback

// 1st
// var variableName = function (param) {
//   console.log(param);
// };

// variableName();

// variableName("apple");

// 2nd

// const variableName = function () {
//   return function () {
//     console.log("apple");
//   };
// };

// variableName();

// callbacks are the functions that are passed as an argument to another function

// let, const, var

// const name = "apple"; // constant

// var name = "apple"; // for global scope, reassign , redeclare
// var name;

// console.log(name);

// let

// let name = "apple"; // reassign , usually within function

// name = "mango";

// console.log(name);

// camel casing, underscore

// 1'st camel casing
// function returnsName(){

// }

// 2'nd underscore
// function returns_name(){

// }

// why interpreted

// console.log(x);

// const x = 10;

// why compiled

//Hoisting

// ftn();

// const ftn = function () {
//   console.log("apple");
// };

// currying
// function ftn(a) { // first second third
//   return (b) => {
//     return (c) => {
//       return a + b;
//     };
//   };
// }

//function
// function ftn2(a, b, c) {
//   return a + b + c;
// }

// console.log(ftn2(10, 20, 30));

// console.log(ftn(10)(20)(30));

// Hold
// function apple() {
//   return function calc() {
//     return 10;
//   };
// }

// var test = apple();

// console.log(apple());


//1 // 2 //3 //4 // event loop // queue

// const arr = ["mango","orange","banana","apple"];

// console.log(arr.sort());

// const check = "5463738239";

// console.log(check.sort())


// setInterval(function(){
//     console.log("Hello Shiv"); 
//    }, 1000)

// const arr = [2,3,5,1,7,10]

// for(let i = 0; i < arr.length; i++){
//   	if(arr[i] % 2 == 0){
//       console.log(arr[i]);
//     }
// }


// const arr2 = arr.filter(element => element>=5);

// console.log(arr2);

