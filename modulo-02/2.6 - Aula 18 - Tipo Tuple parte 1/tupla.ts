// ==> Exemplo 01 - Uso simples de Tuplas em Typescript

let pessoa: [string,string,number];
pessoa = ['Hudney Brito','Dev web', 37];

console.log(pessoa);


//  ==> Exemplo 02 - Acessando o valor de Tupla
let pessoa1: [string,string,number];
pessoa1 = ['Hudney Brito','Dev web', 37];

console.log(pessoa1[1]);


//  ==> Exemplo 03 - Outra forma de usar Tupla em Typescript (com labels)

let pessoa2: [nome: string, profissao: string, idade: number] = ['Hudney Brito','Dev web', 37]

//  ==> pessoa2 = ['Hudney Brito','Dev web', 37];

console.log(pessoa2);

//  ==> Exemplo 04 - Usando Tuplas com Spread Operator
//Lista Homogênia
let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);

//  ==> Exemplo 05 - Lista Heterogênea de Tuplas

let listaFrutas2: [number, boolean, ...string[]] =[5, true, ...listaFrutas];
console.log(listaFrutas2);


//  ==> Exemplo 06 - Uso de função com Tuplas

function listarPessoas(nomes: string[], idades: number[]) {
  return [...nomes, ...idades]
}

let resultado = listarPessoas(['Hudney', 'Jurema'], [37, 71]);
console.log(resultado);

//  ==> Exemplo 07 - Labeled Teuplas com Spread Operator numa função

type Nome =
          | [primeiroNome: string, sobrenome: string]
          | [primeiroNome: string, nomeMeio:string, sobrenome: string]

function criaPessoa(...nome:Nome) {
  return[...nome]
}

console.log(criaPessoa('Hudney', 'Brito'));
console.log(criaPessoa('Hudney', 'Fernandes dos Santos' ,'Brito'));
