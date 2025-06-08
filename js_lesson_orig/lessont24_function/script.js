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
//
let num = 20; // глобальная переменная

function showFirstMessage(text) {   
    console.log(text);
    let num = 10;  // локальная переменная и существует только внутри функции
}

showFirstMessage('Hello world');
console.log(num) // 20 - num уже есть глобальной и внутри функции не учитывается

//
