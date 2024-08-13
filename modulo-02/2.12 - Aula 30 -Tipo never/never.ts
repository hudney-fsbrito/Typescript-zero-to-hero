//Exemplo 01: Never - Throw Exception
function error(message:string): never {
  throw new Error(message)
}
 console.log(error('Erro de Mensagem - 01'));
 
//Exemplo 02: Never inferindo automaticamente
function rejectMessege() {
  return error('Erro de mensagem - 02')
}
console.log(rejectMessege());

//Exemplo 03: Função que contém loop infinito retorna o tipo 'never'
const loopInfinito = function loop() {
 /*  while (true) {
    console.log('Oi!');
    
  } */
}
// console.log(loopInfinito());



//Exemplo 04: Diferença entre os tipos - 'never' vs 'void'
/* 
const algumaCoisaVoid: void = null;

const algumaCoisaNever: never = null;

 */
