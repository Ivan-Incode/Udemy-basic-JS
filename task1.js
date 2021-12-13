/*const x = 10;
let isOdd;
x%2 != 1 ? isOdd = false : isOdd = true;*/
/*
// Задание 1
const spainCapital = 'Valencia';
let isCorrectAnswer;

// Конструкция if..else
// if (spainCapital === 'Madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'MADRID') {
//     isCorrectAnswer = true;
// } else {
//     isCorrectAnswer = false;
// }

// Добавьте код здесь, переписав конструкцию выше на switch
switch(spainCapital) {
  case "Madrid":
    isCorrectAnswer = true;
    break;
  case "madrid":
    isCorrectAnswer = true;
    break;
  case "MADRID":
    isCorrectAnswer = true;
    break;
  default: isCorrectAnswer = false;
}


// Задание 2
const a = 1;
const b = 2;
let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// Добавьте код здесь, переписав конструкцию выше на тернарный оператор
a + b < 4 ? result = 'Мало' : result = 'Много';


// 1) Создайте массив numbers и сохраните в нем 3 числа - 1, 2 и 3

const numbers = [1, 2, 3];
console.log(numbers)

// 2) Создайте переменную luckyNumber и сохраните в него последнее число из массива (используя индекс массива).

const luckyNumber = numbers[numbers.length-1];
console.log(luckyNumber)

// 3) Удалите последний элемент массива и добавьте в конец массива два новых числа.

numbers.splice(numbers[numbers.length-1], 1, 10, 20);
console.log(numbers)

const numbers = [2, 7, 19, 22, 38, 9, 11, 10, 10];
let i = 1;
while(i<numbers.length) {
  console.log(i)
    numbers[i] = numbers[i]*2;
    i+=2;
}
console.log(numbers)

const numbers = [1, 2, 3, 4, 5, 6];

for(let i=0; i< numbers.length; i+=2) {
  numbers[i] += 3;
}
console.log(numbers)

const numbers = [1, 2, 2, 13, 11, 7, 18, 20, 22, 14, 15];

const evenNumbers = [];

for (let i=0; i<numbers.length; i++) {
    if(evenNumbers.length === 3) break;
    if (numbers[i]%2===0 && evenNumbers.length < 3) evenNumbers.push(numbers[i])
    else continue;
}

console.log(evenNumbers)

function multiply(a, b, c) {
    return a * b * c;
}

function euroToRub(euro) {
    return euro * 90;
}

function milesToKm(miles) {
    return miles * 1.609;
}

*/