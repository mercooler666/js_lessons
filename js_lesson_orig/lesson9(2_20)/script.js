const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('Я сыт!'); // Я сыт /* проверяем условие равности и выводим исход */
}

console.log((hamburger && fries)); // true /* получаем общий итог */
/* Результат логических операций - всегда булиновое значение */

const hamburger = true;
const fries = false;

if (hamburger && fries) {
    console.log('Я сыт!'); // так как один из обьектов false - функция не выводится
}

console.log((hamburger && fries)); // false // true && false - false

// пример 3

const hamburger = 0;
const fries = 5;

if (hamburger && fries) {
    console.log('Я сыт!'); 
}

console.log((hamburger && fries)); // 0

// разбор
/* hamburger = 0 → ❌ false

fries = 5 → ✅ true

hamburger && fries → результат: 0 (первое "ложное" значение) */

// 

const hamburger = 2;
const fries = 1;

if (hamburger ===3 && fries === 1) {
    console.log('Нам хватит!'); 
} else {
    console.log('Нам мало!'); // Нам мало ! не всем хватит 
} 


// если оператор && видит false - дальше не выполняется

//пример 

const hamburger = 2;
const fries = 1;
const cola = 0;

if (hamburger ===3 && cola === 1 && fries) {  // условие не выполнится cola - false
    console.log('Нам хватит!'); 
} else {
    console.log('Нам мало!'); // Нам мало ! не всем хватит 
} 

// СЛОЖНОЕ

const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries); // 0 //
//логические операторы возращают значения с какими работают
// логические операторы возращают значение на котором окончили работу, на false
const hamburger = 3;
const fries = 1;
const cola = 1;

console.log(hamburger === 3 && cola && fries); // 1
//
const hamburger = 3;
const fries = 100;
const cola = 1;

console.log(hamburger === 3 && cola && fries); // 100
//
const hamburger = 3;
const fries = 1000;
const cola = 1;

console.log(hamburger === 3 && cola && fries); // 1000

///

const hamburger = 3;
const fries = 100;
const cola = 1;

// возращают значение на котором условие - false//

console.log(1 && 0);  // 0  //- 1-true 0-false
console.log(1 && 5);  // 5
console.log(null && 5); //null
console.log(0 && 'bvdbvhbbvh'); // 0 