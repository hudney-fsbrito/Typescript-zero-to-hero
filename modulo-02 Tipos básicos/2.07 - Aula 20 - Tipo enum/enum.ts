// Exemplo 01: Numeric Enums (Enums Numéricos)

enum Idioma {
  Portugues,
  Espanhol,
  Ingles,
  Frances
}

console.log(Idioma);


//Exemplo 02: String Enums

enum Dia {
  Segunda = 'SEG',
  Terca = 'TER',
  Quarta = 'QUA',
  Quinta = 'QUI',
  Sexta = 'SEX',
  Sabado = 'SAB',
  Domingo = 'DOM'
}

console.log(Dia.Quarta);


//Exemplo 03: Como podemos acessar um valor de um Enum coma chave: (usadno o const)

/*const enum Comida {
  Hamburguer,
  Massa,
  Pizza,
  Torta,
  Churrasco,
}

function comida(c:Comida) {
  return `${c} São Comidas muito apetitosa`
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
console.log(comida(4));*/

const enum Comida {
  Hamburguer = 'Hamburguer',
  Massa = 'Massa',
  Pizza = 'Pizza',
  Torta = 'Torta',
  Churrasco = 'Churrasco',
}

function comida(c:Comida) {
  return `${c} São Comidas muito apetitosa`
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
console.log(comida(Comida.Torta));

// Exemplo 04: Quando usar enum??

enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id:1,
  status: Tarefa.Done,
  description: 'Parabéns! Tarefa concluída com sucesso',
   
}

if (concluidaTarefa.status === Tarefa.Done) {
  console.log("Enviar e-mail: Tarefa concluída!");
}
