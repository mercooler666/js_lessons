///
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 6; // Количество строк 

let result = "";

for (let i = 1; i <= lines; i++) {
  // Пробелы: уменьшаются с каждой строкой
  result += " ".repeat(lines - i);

  // Звёздочки: увеличиваются по формуле 2*i - 1
  result += "*".repeat(2 * i - 1);

  // Переход на новую строку
  result += "\n";
}

console.log(result);