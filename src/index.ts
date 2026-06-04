// Welcome to TypeScript project!

function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

const message: string = greet("World");
console.log(message);

// Example of TypeScript features
interface User {
    name: string;
    age: number;
    email?: string;
}

const user: User = {
    name: "John Doe",
    age: 30
};

console.log("User:", user);