// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'patrick',
  age: 20,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spend', amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log('hello', person.name);
};

greetPerson(me);

console.log(me);

import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('patrick', 'work on the patrick website', 250);
const invTwo = new Invoice('robert', 'work on the robert website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
