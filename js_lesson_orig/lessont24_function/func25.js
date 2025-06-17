//создаем функцию конвертер и в консоли выводим конвертированную цифру(500) по нашему курсу(28)
function convert (amount) {
    console.log(28 * amount);//14000
}
convert(500);
//пример2 - универсальная функция
const usdCurr = 28; // заранее обьявляем или берем значение курса
function convert (amount, curr) { // аргументы amount и curr берутся с convert(500, usdCurr) - 
    console.log(curr * amount); // выводим конвертированную цифру // 14000
}
convert(500, usdCurr);
//DRY - dont repeat yourself - метод

