let username: string = "John"; // string
username = "john.smith@gmail.com";

let age: number = 50; // number
let isValid = true; // boolean

// Union type (multiple types variable)
let userId: string | number = "123";
userId = 123;

// Objects
// let user: object;  //object  (not recommended)
let user: {
	// recommended
	userName: string;
	age: number;
	isAdmin: boolean;
	id: string | number;
};

user = {
	userName: "john",
	age: 50,
	isAdmin: false,
	id: 213124512,
};

// Arrays
let hobbies: Array<string>; // type string
let numbers: number[]; // type number

hobbies = ["Reading", "Running", "Cooking"];
numbers = [1, 123, 32523, 161];

// functions
function add(a: number, b: number): number {
	console.log(a + b);
	return a + b;
}

const greetUser = (name: string): string => `Hi, ${name}`;
console.log(greetUser("Johnny"));

// Type Aliases
type StringOrNumber = string | number;

type User = {
	userName: string;
	age: number;
	isAdmin: boolean;
	id: StringOrNumber;
};

let sarahAdams: User = {
	userName: "Sarah Adams",
	age: 38,
	isAdmin: true,
	id: "C3D21P564",
};

console.log(sarahAdams.userName);

// Interface

interface userDetails {
	email: string;
	password: string | number;
}

let william: userDetails = {
	email: "william28@gmail.com",
	password: "P2@asd221SS",
};

console.log(william.email);

// classes
class AuthCredentials implements userDetails {
	email: string;
	password: string | number;

	constructor(email: string, password: string) {
		(this.email = email), (this.password = password);
	}
}

// Merging types

type Admin = {
	permissions: string[];
};
type AppUser = {
	username: string;
	password: string;
};
type AppAdmin = Admin & AppUser;

let admin: AppAdmin = {
	username: "ali.75@gmail.com",
	password: "P12321s@",
	permissions: ["Read", "Write"],
};

// We could also use interface instead of type to merge types.

// Literal types
let role: "admin" | "user" | "editor";

role = "admin";
role = "user";

// type guards

type Permission = "Read" | "Create" | "Edit" | "Delete";

let adminUser: Permission;
function performAction(action: string | number, role: Permission) {
	if (role === "Create" && typeof action === "string") {
		console.log("Allow this user to create new posts");
	}
}

// Generic types

type DataStorage<T> = {
	storage: T[];
	add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
	storage: [],
	add(data) {
		this.storage.push(data);
	},
};

const userStorage: DataStorage<string> = {
	storage: [],
	add(user) {
		this.storage.push(user);
	},
};

function merge<T, U>(a: T, b: U) {
	return {
		...a,
		...b,
	};
}
