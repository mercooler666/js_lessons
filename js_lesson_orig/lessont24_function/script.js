'use strict'

function showFirstMessage(text) {   // в () пишем аргументы фу-ции
    console.log(text);
}

showFirstMessage('Hello world');  // вызов функции
//

let num = 20; // глобальная переменная

function showFirstMessage(text) {   
    console.log(text);
    num = 10;  // локальная переменная и существует только внутри функции
}

showFirstMessage('Hello world');
console.log(num) // 10 - ибо функция выплнилась и внутри изменилась внутри функции
///
let num = 20; // глобальная переменная

function showFirstMessage(text) {   
    console.log(text);
    let num = 10;  // локальная переменная и существует только внутри функции
}

showFirstMessage('Hello world');
console.log(num) // 20 - num уже есть глобальной и внутри функции не учитывается

///

let num = 20;

function showFirstMessage(text) {
    console.log(text); // Hello World
    let num = 10;
    console.log(num) // 10 - покажет локальную переменную 
}

showFirstMessage("Hello World");
console.log(num) // 20  - покажет глоабльную

//

let num = 20;

function showFirstMessage(text) {
    console.log(text); // Hello World
    console.log(num) // 20 - внутри нет переменной и она покажет переменную на уровень выше
}

showFirstMessage("Hello World");
console.log(num) // 20  - покажет глоабльную

//
function calc(a, b) {
    return (a + b); // return - окончание функции 
}

console.log(calc(4, 3)); // 7 - подставии значения вместо a и b
console.log(calc(5, 6)); // 11
//
function ret() {
    let num = 50;
    return num; // return выводит num в глобал
}
const anotherNum = ret();
console.log(anotherNum);// 50 - с помощью return переменная вышла на уровень выше
//
