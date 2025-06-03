// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }

        // Пишем решение вот тут
        
        console.log(result)
        
        // Не трогаем
        return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
const data = [5, 10, 'Shopping', 20, 'Homework'];

    const result = data.map(function(item) {
    if (typeof item === "number") {
        return item * 2;
    } else {
        return item + " - done";
    }
    });

    // Очищаем массив data:
    data.length = 0;

    // Добавляем все элементы из result:
    data.push(...result);

    console.log(data);


    

    // Пишем решение вот тут
    
    
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    result.length = 0; 
    data.push(...result);
    console.log(result)

    // Пишем решение вот тут
    
    
    // Не трогаем
    return result;
}