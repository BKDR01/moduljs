let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let res = document.querySelector('#res');

let addbtn = document.querySelector("#add")
let min = document.querySelector("#minus")
let kop = document.querySelector("#kopaytit")
let bol = document.querySelector("#bol")

import { add, subtract, multiply, divide } from './modul.js';

addbtn.addEventListener('click', () => add(number1.value, number2.value, res));
min.addEventListener('click', () => subtract(number1.value, number2.value, res));
kop.addEventListener('click', () => multiply(number1.value, number2.value, res));
bol.addEventListener('click', () => divide(number1.value, number2.value, res));
