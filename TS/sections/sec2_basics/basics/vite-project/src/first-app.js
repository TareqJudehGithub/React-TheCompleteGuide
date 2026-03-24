"use strict";
let username = "John"; // string
username = "john.smith@gmail.com";
let age = 50; // number
let isValid = true; // boolean
// Union type (multiple types variable)
let userId = "123";
userId = 123;
// Objects
// let user: object;  //object  (not recommended)
let user;
user = {
    userName: "john",
    age: 50,
    isAdmin: false,
    id: 213124512,
};
// Arrays
let hobbies; // type string
let numbers; // type number
hobbies = ["Reading", "Running", "Cooking"];
numbers = [1, 123, 32523, 161];
// functions
function add(a, b) {
    console.log(a + b);
    return a + b;
}
const greetUser = (name) => `Hi, ${name}`;
console.log(greetUser("Johnny"));
let sarahAdams = {
    userName: "Sarah Adams",
    age: 38,
    isAdmin: true,
    id: "C3D21P564",
};
console.log(sarahAdams.userName);
