// Re-opening an interface

interface Employee {
	firstName: string;
	lastName: string;
}

interface Employee {
	age: number;
}

// We can combine the two interfaces

const empSarah: Employee = {
	firstName: "Sarah",
	lastName: "Adams",
	age: 37,
};
