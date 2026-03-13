// @ts-nocheck
import userName from "./util.js";
import { apiKey } from "./util.js";
import * as util from "./util.js";
import { lName as lastName } from "./util.js";

console.log("Hello from app.js");
console.log(userName);
console.log(apiKey);
console.log(util.firstName);
console.log(lastName);

let greet = "Hello World!";
console.log(greet);

let emailAddress;
const nationalId = "12365789";

function combine(a, b, c) {
	return (a * b) / c;
}

let result = combine(10, 10, 2);

console.log(result);

let greetUser = (user = "John Smith") => `Hello, ${user}`;

console.log(greetUser(userName));

// Objects
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const userDetails = {
	name: "John",
	birthYear: 1975,
	email: "john.smith@gmail.com",
	gender: "M",
	calculateAge() {
		return currentYear - this.birthYear;
	},
};
console.log(userDetails.gender);
console.log(userDetails.calculateAge());

// Arrays
const friendsArray = ["John", "Sarah", "William", "Sandra"];
console.log(friendsArray[1]);
// Add a new item
friendsArray.push("Ahmad");

// Array.findIndex() returns index number if found, or -1 if not found
const findFriend = friendsArray.findIndex((friend) => friend === "Ahmad");
console.log(findFriend);

const friendsNames = friendsArray.map((item) => ({ Name: item }));
console.log(friendsNames);

const numberArray = [1, 2, 3, 4, 5];
function transformToObjects(numberArray) {
	// Todo: Add your logic
	const numberObj = numberArray.map((number) => ({ Val: number }));
	// should return an array of objects
	return numberObj;
}

console.log(transformToObjects(numberArray));

// Destruct
const sarah = friendsArray[1];
const oddNumbers = [numberArray[0], numberArray[2], numberArray[4]];
console.log(sarah);
console.log(oddNumbers);

const { name: fullName, email: emailAdd } = {
	name: "Sarah",
	email: "sarah@gmail.com",
};

console.log(fullName);
console.log(emailAdd);

const { birthYear, gender } = {
	birthYear: userDetails.birthYear,
	gender: userDetails.gender,
};

console.log(birthYear);
console.log(gender);

// Spread
const newNumberArry = [6, 7, 8, 9, 10];
const spreadArr = [...numberArray, ...newNumberArry];
console.log(spreadArr);

const extraUserDetails = {
	...userDetails,
	address: "building, street, area",
	city: "Amman",
	country: "Jordan",
};
console.log(extraUserDetails);

for (const friend of friendsArray) {
	console.log(friend);
}

const initialValue = 0;

const sum = newNumberArry.reduce(
	(acc, currentValue) => acc + currentValue,
	initialValue
);
console.log(sum);

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 0, "may");
// Inserts at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "may"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
