// Function - функции

//1) Function Declaration 
function foo() {
    //код//
}
Создается до начала выполнения скрипта, можно вызвать перед обьявлением. Она существует до выполнения кода
//
//2) Function Expression
let foo = function() {
    //код//
}
Создается только тогда, когда доходит поток кода, можно вызвать только после обьявления.foo
//
//3) Стрелочные функции
() = >
не имеет своего контекста//
//

//пример expression
 const logger = function() { 
    console.log("Hello");
 };
 logger(); // вызов функции// "Hello"
 // стандарт es6
//стрелочная функция
 const calc = (a, b) => {return a + b}; // - const calc = (a, b) => a + b;

 const calc = (a, b) => {
    console.log('1');
    return a + b;
 }
