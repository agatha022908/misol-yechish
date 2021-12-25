
// let x = myRandom(5, 20);
// let y = myRandom(5, 20);



// let num = myRandom(1,4);

// function myRandom(min, max) {
//     let result = Math.round(Math.random() * (max - min ) + min);
//     return result;
// }

// function mySign(num) {
//     if(num == 1){return '+'}
//     else if(num == 2){return '-'}
//     else if(num == 3){return '*'}
//     else if(num == 4){return '/'}
// }

// let sign = mySign(myRandom(1,4));

// function mathOperation(x, y, sign){
//     if(sign == '+'){return x + y};
//     if(sign == '-'){return x - y};
//     if(sign == '*'){return x * y};
//     if(sign == '/'){return x / y};
// }

// let answer = +prompt(`Решите пример: ${x} ${sign} ${y} = ?`);
// let result = mathOperation(x, y, sign);

// if(answer == result){
//     console.log(`Вы решили правильно`);
// }else{
//     console.log(`Вы решили неправильно. Результат равен ${x} ${sign} ${y} = ${result}`);
// }

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let primer = +prompt("Nechta misol bo'lish kerak");
for(let i = 0; i < primer; i++) {
    let num1 = random(1,100);
    let num2 = random(1,100);
    let symbol = random(1,4);
    let example = 0;
    if(symbol == 1) {
        example = num1 + num2;
        symbol = '+';
    }else if (symbol == 2) {
        example = num1 - num2;
        symbol = '-';
    }else if (symbol == 3) {
        example = num1 * num2;
        symbol = '*';
    }else if(symbol == 4) {
        example = num1 / num2;
        symbol = '/';
    }
    let answer = prompt(num1 + symbol + num2);
    alert(answer == example ? "Javobiz tog'ri" + example : " Javobiz togri emas " + answer + " Togri javob " + example)
}