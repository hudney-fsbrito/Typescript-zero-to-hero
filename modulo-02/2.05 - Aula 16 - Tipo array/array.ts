//TIPO ARRAY

// Exemplo 01 - Uso de Colchetes:

let frutas : string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);

// Exemplo 02 - Array Object (Objeto Array):

let frutas1 : Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[3]);

// Exemplo 03 - Add mais elementos com push()

let idiomas: Array<string> = ['Português', 'Ingês', 'Espanhol', 'Francês']
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
idiomas.push('Italiano');
console.log(idiomas);

// Exemplo 04 - Identificando tamanho do Array com 'length'

let idiomas1: Array<string> = ['Português', 'Ingês', 'Espanhol', 'Francês'];
console.log(idiomas1.length);

// Exemplo 05 - Array com Speed Operator

let listaNumeros = [0,1,2,3,4,5];
listaNumeros = [...listaNumeros, 6,7,8,9,10];

console.log(listaNumeros);

// Exemplo 06 - Array com laço de iteração

let linguagemArray:string[] = new Array('JavaScript', 'Python', 'PHP', 'C#');

function funcaoLinguagem(linguagem:string[]) {
  for (let i = 0; i < linguagem.length; i++) {
    // const element = linguagemArray[i];
    console.log(linguagem[i]);
    
  }
}

funcaoLinguagem(linguagemArray)



