const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472
];

function showResults(x) {
    const page = document.querySelector('body');
    const resultado = document.createElement('p');
    resultado.innerText = x
    page.appendChild(resultado);
}

function kata1() {
    // implemente o código do kata 1 aqui
    const numeros = [];
    for (let i = 1; i <= 25; i++) {
        numeros.push(i);
    }
    showResults("Kata1: " + numeros);
}
kata1();

function kata2() {
    // implemente o código do kata 2 aqui
    const numeros = [];
    for (let i = 25; i > 0; i--) {
        numeros.push(i);
    }
    showResults("Kata2: " + numeros);
}
kata2();


function kata3() {
    // implemente o código do kata 3 aqui
    const numeros = [];
    for (let i = -1; i >= -25; i--) {
        numeros.push(i);
    }
    showResults("Kata3: " + numeros);
}
kata3();

function kata4() {
    // implemente o código do kata 4 aqui
    const numeros = [];
    for (let i = -25; i <= -1; i++) {
        numeros.push(i);
    }
    showResults("Kata4: " + numeros);
}
kata4();

function kata5() {
    // implemente o código do kata 5 aqui
    const numeros = [];
    for (let i = 25; i >= -25; i -= 2) {
        numeros.push(i);
    }
    showResults("Kata5: " + numeros);
}
kata5();

function kata6() {
    // implemente o código do kata 6 aqui
    const numeros = [];
    for (let i = 1; i <=100; i++){
        if(i % 3 == 0) {
            numeros.push(i)
        }
    }
    showResults("Kata6: " + numeros);
}
kata6();

function kata7() {
    // implemente o código do kata 7 aqui
    const numeros = [];
    for (let i = 1; i <=100; i++){
        if(i % 7 == 0) {
            numeros.push(i)
        }
    }
    showResults("Kata7: " + numeros);
}
kata7();


function kata8() {
    // implemente o código do kata 8 aqui
    const numeros = [];
    for (let i = 100; i >=0; i--){
        if(i % 3 == 0 || i % 7 == 0) {
            numeros.push(i)
        }
    }
    showResults("Kata8: " + numeros);
}
kata8();

function kata9() {
    // implemente o código do kata 9 aqui
    const numeros = [];
    for (let i = 0; i <= 100; i += 5){
        if(i % 2 !== 0) {
            numeros.push(i)
        }
    }
    showResults("Kata9: " + numeros);
}
kata9();


function kata10() {
    // implemente o código do kata 10 aqui
    const exibir = [];
    for (let i = 0; i < sampleArray.length; i++) {
        exibir.push(sampleArray[i]);
    }
    showResults("Kata10: " + exibir);
}
kata10();


function kata11() {
    // implemente o código do kata 11 aqui
    const exibir = [];
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 == 0){
            exibir.push(sampleArray[i]);
        }
    }
    showResults("Kata11: " + exibir);
}
kata11();

function kata12() {
    // implemente o código do kata 12 aqui
    const exibir = [];
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 !== 0){
            exibir.push(sampleArray[i]);
        }
    }
    showResults("Kata12: " + exibir);
}
kata12();


function kata13() {
    // implemente o código do kata 13 aqui
    const exibir = [];
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 8 == 0){
            exibir.push(sampleArray[i]);
        }
    }
    showResults("Kata13: " + exibir);
}
kata13();

function kata14() {
    // implemente o código do kata 14 aqui
    const exibir = [];
    for (let i = 0; i < sampleArray.length; i++) {
        const quadrado = sampleArray[i] ** 2;
        exibir.push(quadrado);
    }
    showResults("Kata14: " + exibir);
}
kata14();

function kata15() {
    // implemente o código do kata 15 aqui
    let soma = 0;
    for (let i = 1; i <= 20; i++) {
        soma = soma + i;
    }
    showResults("Kata15: " + soma);
}
kata15();

function kata16() {
    // implemente o código do kata 16 aqui
    let soma = 0;
    for (let i = 0; i < sampleArray.length; i++) {
        soma = soma + sampleArray[i];
    }
    showResults("Kata16: " + soma);
}
kata16();


function kata17() {
    // implemente o código do kata 17 aqui
    let menor = sampleArray[0];
    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] < menor){
            menor = sampleArray[i];
        }
    }
    showResults("Kata17: " + menor);
}
kata17();

function kata18() {
    // implemente o código do kata 18 aqui
    let maior = sampleArray[0];
    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] > maior){
            maior = sampleArray[i];
        }
    }
    showResults("Kata18: " + maior);
}
kata18();

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
