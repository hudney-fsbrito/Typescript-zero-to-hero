

// Exemplo number

let num1: number = 23.0; //Inteiro / Ponto flutuante
let num2: number = 0x78CF; //Hexadecimal
let num3: number = 0o577; //Octal
let num4: number = 0b100110; //Número binário

// console.log('Number - ponto flutuante...',num1);
// console.log('Number - Hexadecimal...l',num2);
// console.log('Number - Octal...',num3);
// console.log('Number - Número binário...',num4);
// console.log('Number - ponto flutuante...', typeof num1);
// console.log('Number - Hexadecimal...l',typeof num2);
// console.log('Number - Octal...',typeof num3);
// console.log('Number - Número binário...',typeof num4);


let big1: bigint = 9007199254740991n;
let big2: bigint = 0b100000000000000000000000000000000011n;
let big3: bigint = 0x20000000000003n;
let big4: bigint = 0o400000000000000003n;

console.log('Bigint ...: ', big1);
console.log('Bigint - Binário: ', big2);
console.log('Bigint - Hexadecimal: ', big3);
console.log('Bigint - Octal: ', big4);

console.log('Bigint ...: ',typeof big1);
console.log('Bigint - Binário: ',typeof big2);
console.log('Bigint - Hexadecimal: ',typeof big3);
console.log('Bigint - Octal: ',typeof big4);

