// Задача 3: Расчёт суммы и среднего оценки
// 📝 Условие:

// Создай три переменные с названиями score1, score2 и score3.
// Пусть в них хранятся оценки: 8, 10, 9.

// Создай переменную sum, в которую запиши сумму всех трёх оценок.

// Создай переменную average, в которую запиши среднее арифметическое этих оценок.

// Выведи sum и average в консоль по отдельности.
// let score1 = 8;
// let score2 = 10;
// let score3 = 9;
// let sum =  score1 + score2 + score3;
// let average = sum/3; 
// console.log(sum);
// console.log(average);

let studentName = "Lena";
let score1 = 7;
let score2 = 9;
let score3 = 10;
let average = (score1 + score2 + score3)/3;
console.log(`Ученик ${studentName} получила среднюю оценку: ${average.toFixed(2)}`);