// || - оператор "или" проверяет на выполнение одного условия
// или" - запинается на правде, если все не правда то возращается последнее ложное 
const hamburger = 3;
const fries = 0;
const cola = 0;

if (hamburger || cola || fries) {
    console.log('GOOD'); // GOOD // так как одно условие выполнилось
} else {
    console.log ('Not good');
}

console.log((hamburger || cola || fries)) // 3 - так как больше 0 правда и он остановился на нем

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport); // done // - mariaReport - последняя правда

//