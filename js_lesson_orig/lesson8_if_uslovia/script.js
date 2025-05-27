// if (4 == 9) {       // проверяем условие первое равно второму или нет
//     console.log('Ok!'); // ничего не получаем ибо они разные
// }

// if (4 == 4) {       
//     console.log('Ok!'); // Ok! - 4 равно 4
// }

// if (4 == 9) {        
//     console.log('Ok!'); // -- // 4 не равно 9
// } else {   // else - будет выполнять действие, если условие нарушено
//     console.log('Error!'); // Error 
// }
//у словия внутри () должны быть булинового типа правда/лож, тоесть чтоб ответ на вопрос да/нет
// условие - превращает любой тип данных в булиновое

// if (4) {        
//     console.log('Ok!'); // Ok! //
// } else {   // e
//     console.log('Error!'); 
// }



// const num = 50

// if (num < 49) { // если num меньше"<" 50
//     console.log('True'); // правда
// } else {
//     console.log('False'); // 
// } /// output - False-- num больше 50

//вложенность условий//
// const num = 50

//  if (num < 49) { 
//      console.log('error'); 
// } else if (num > 100) { // вложенное условие
//     console.log('To much');  
// } else {
//     console.log('Ok!') // Ok!
// }

//Тернарный оператор - оператор с 3 аргументами в работе
// const num = 50;
// (num === 50) ? console.log('Ok!') : console.log('Error'); // Ok!//

//Switch - конструкция для поддержки нескольки условий

const num = 50;
//switch всегда строгое сравнение
// switch (num) {
//     case 49:
//         console.log('Неверно')
//         break; // если условие выполнилось скрипт дальше не выполняется 
//     case 100:
//         console.log('Неверно')
//         break;
//     case 50:
//         console.log('Правдивое')
//         break;        
//     default:   // если ниодно условие не выполнилось
//         console.log('Не в этот раз')
//         break;    
// }
TextDecoderStream
