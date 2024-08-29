/* 
O void tipa e garante que a função não terá retorno
*/

// Exemplo 01 - Funções:

function logErro(erroMessange:string): void {
  console.log(erroMessange);
  // return erroMessange; Erro
  
}

logErro('Required field - Name!');

// Exemplo 02 - Arron function:

const logErroExemple2 = (erroMessange:string): void => {
  console.log(erroMessange);
  
}
logErroExemple2('Required field - Name!');


// Exemplo 03 - Variável

let variavelExemploVoid: void;
// variavelExemploVoid = 1;
// variavelExemploVoid = null;  // Para não dar erro precisa colocar no tsconfigjson => "strictNullChecks": false, 
variavelExemploVoid = undefined;
// variavelExemploVoid = 'Hudney';

console.log(variavelExemploVoid);


