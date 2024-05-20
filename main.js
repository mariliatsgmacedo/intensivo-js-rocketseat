/** 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.*/
//alert('Hello World!');
console.log('1 - Hello world');

/**2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas. */
let numero1 = 5;
let numero2 = 6;
let soma = numero1 + numero2;
console.log('2 - ', soma);

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
//     💡 Para saber o tipo de dado você pode usar o operador `typeof`
let isNumber = 5;
typeof(isNumber) == 'number' ? console.log('3 - É UM NUMERO') : console.log('3 - NÃO É UM NÚMERO');

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let isString = 'TAMILES';
typeof(isString) == "string" ? console.log('4 - É UM STRING') : console.log('4 - NÃO É UMA STRING');

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let isBool = true;
typeof(isBool) == "boolean" ? console.log('5 - É UM BOOLEANO') : console.log('5 - NÃO É UM BOOLEANO');

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let num1 = 5;
let num2 = 6;
let sub = numero1 - numero2;
console.log('6 - ', sub);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let nume1 = 5;
let nume2 = 6;
let multiplicação = numero1 * numero2;
console.log('7 - ', multiplicação);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let numer1 = 10;
let numer2 = 6;
let divisão = numer1 > 0 ? (numero1 / numero2).toFixed(2) : console.log('8 - Não é possivel divisao por ZERO');
console.log('8 - ', divisão);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let numeroTeste = 6;
let resultado = numeroTeste % 2 === 0 ? console.log('9 - É UM NUMERO PAR'): console.log('9 - É UM NUMERO IMPAR');

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let numeroTeste2 = 7;
let resultado2 = numeroTeste2 % 2 !== 0 ? console.log('10 - É UM NUMERO IMPAR'): console.log('10 - É UM NUMERO PAR');
