//сделать пирамиду из звезд
// *
// **
// ***
// ****
// ******
// *******
let result = '';  // result выводит строку
const length = 7;  // длина не более 7 рядов

for (let i = 1; i < length; i++) {
    for ( let j = 0; j < i; j++){
        result += "*"; 
    }

    result += '\n' // \n - перенос строки
}

console.log(result);

