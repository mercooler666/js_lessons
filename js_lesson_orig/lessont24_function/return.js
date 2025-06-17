const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount; // return возращает результат а не пишет просто в консоль
}

function promotion(result) {
    console.log(result * discount); // 12600 - результат 
}

promotion(convert(500, usdCurr)) // результат фунцкии конверт запишется в result и пойдет выполнение второй функции
///
//другой вариант записи
const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount; // 
}

function promotion(result) {
    console.log(result * discount); //  
}
const res = convert(500, usdCurr);
promotion(res); // 
//
// если функция видит return - она заканчивает выполнять код
//return может возращать любые значения функции, обьекты, переменные..
/// Пример 

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return // когда функция видит 3 - она заканчивает свою работу и результат будет 0 1 2 3
    }
    console.log('Done');
}
test() // вызов функции
//Любая функция всегда возрашает что-то
//

function doNothing() {} // пустая функция
console.log(doNothing() === undefined);// сравнили результат функции с undefined// результат true
// любая функция которая не имеет return возращает undefined