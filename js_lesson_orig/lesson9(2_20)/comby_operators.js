const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

//  пищем условие
// 3 гамбургера и 2 колы или 3 фри и наггетсы
if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('GOOD'); // good
} else {
    console.log('Not good'); 
}

// сначала происходит сравнение hamburger - правда, потом колы - это неправда === false
// fries(true) и nuggets(true)

//  так как оператор || возращает good ибо одно условие выполнилось

console.log((hamburger === 3 && cola === 2 || fries === 3 && nuggets)); // 2  -
                    //    false                   /// true 
                                // || - или        //возращает послед значение правды  

console.log((hamburger === 3 && (cola === 2 || fries === 3 && nuggets)));// 2 // используем оператор групировки ()

console.log(!0); //true - "!" оператор НЕ - 0 - false