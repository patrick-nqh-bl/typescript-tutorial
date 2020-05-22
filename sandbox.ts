// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'patrick';
age = 20;

// isLoggedIn = 25
isLoggedIn = true;

// arrays
let dev: string[] = [];

dev.push('patrick');

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = '123';
uid = 123;

// objects
let devOne: object;
devOne = { name: 'patrick', age: 20 };

let devTwo: {
  name: string;
  age: number;
  beltColour: string;
};

devTwo = {
  name: 'robert',
  age: 25,
  beltColour: 'black',
};
