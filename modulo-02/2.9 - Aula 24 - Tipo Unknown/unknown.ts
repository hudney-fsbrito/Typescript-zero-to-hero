//Exemplo 01 - Tipo Unknown

let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'olá, mundo!';

console.log(valorVariavel);


//Exemplo 02 - Erro ao tentar atribuir um valor do tipo 'unknown1 a outros tipos

/* let valor: unknown;
let valor1: boolean = valor;
let valor1: any = valor;
let valor1: any[] = valor;
let valor1: string = valor; */

//Exemplo 03 - diferença entre 'any' vs 'unknown'

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed());

if (typeof algumaCoisaUnknown === 'number') {
  console.log(algumaCoisaUnknown.toFixed()); //vai dá erro. já mostra erro em tempo de execução
  //Será obrigado a verificação de tipo para não dar ERRO
}