let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'patrick' };
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push('patrick');
mixed.push(false);
console.log(mixed);

let dev: { name: any; age: any };

dev = { name: 'patrick', age: 20 };
console.log(dev);

dev = { age: 25, name: 'robert' };
console.log(dev);
