console.log( NaN || 2 || undefined );// 2
// Оператор || (логическое ИЛИ) возвращает первое "истинное" значение (truthy), если оно есть, иначе — последнее значение.
console.log( NaN && 2 && undefined );//Nan
// оператор И  && Возвращает первое falsy значение, если оно есть.
// Если все значения truthy — возвращает последнее.
console.log( 1 && 2 && 3 );//3

console.log( !1 && 2 || !3 );//false
// 1 - true; !1 - false; 
// false && 2 ( && ищет первое falsy → это (!1))
// результат  && - false
// false || false - ( || ищеь первое true, но оба - false)
// результат - false
console.log( 25 || null && !3 );// 25
// 25 - true
// null && !3 - оба false
// true(25) || false === 25
console.log( NaN || null || !3 || undefined || 5); //5
console.log( NaN || null && !3 && undefined || 5); //5
///
console.log( 5 === 5 && 3 > 1 || 5);
// 1) 5 === 5 - true
// 2) 3 > 1 - true
// 3) true && true || 5 - будет 5 - последн истинное

//

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!') // Done - выполнилось fries === 3 && nuggets
}

//