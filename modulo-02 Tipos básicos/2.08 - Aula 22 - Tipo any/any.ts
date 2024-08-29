// Exemplo 01: Tipo Any
const a: any = '37';
const b: any = ["hudney"]

const result = a + b;
console.log(result);

//Exemplo 02: Quando o tipo 'any' é inferido implicitamente
/* let frase;
frase = 'Oi, pessoal! Tudo bemm?'

console.log(frase); */

// Exemplo 03: Quando devemos usar o tipo any

let formulario: {[campoFormulario: string]: any} = {
  nome: 'Hudney',
  sobrenome: 'Brito',
  idade: 37,
}

console.log(formulario);
