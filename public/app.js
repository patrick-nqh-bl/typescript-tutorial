const me = {
    name: 'patrick',
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spend', amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('patrick', 'work on the patrick website', 250);
const invTwo = new Invoice('robert', 'work on the robert website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
