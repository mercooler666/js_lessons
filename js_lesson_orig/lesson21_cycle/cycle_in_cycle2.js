// 
first: for (let i = 0; i < 3; i++) {  //first - метка
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first; // когда k = 2 будет запускаться цикл first - i
            console.log(`Third level: ${k}`);
        }
    }
}
// First level: 0
// Second level: 0
// Third level: 0
// Third level: 1
// First level: 1
// Second level: 0
// Third level: 0
// Third level: 1
// First level: 2
// Second level: 0
// Third level: 0
// Third level: 1
first: for (let i = 0; i < 3; i++) {  //first - метка
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first; // когда k = 2 будет запускаться цикл first - i
            console.log(`Third level: ${k}`);
        }
    }
}
// First level: 0
// Second level: 0
// Third level: 0
// Third level: 1