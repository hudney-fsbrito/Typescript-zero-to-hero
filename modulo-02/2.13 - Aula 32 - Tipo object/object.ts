export { };

//Exemplo 01 => exemplo básico do uso Type Object
const pessoa = {
  nome: 'Hudney',
  sobrenome: 'brito',
  idade: 37,
  funcao: 'Dev Wev'
}
// console.log(pessoa);

//Exemplo 02 => object como parâmentro de função (eles podem ser anônimos)
function onboarding01(funcionario: {nome: string}){
  return 'Seja bem-vindo ' + funcionario.nome;
}
// console.log(onboarding01({nome: 'Hudney Brito'}));


//Exemplo 03 => object nomeados
interface Pessoa {
  nome: string;
  funcao: string;
}

function onboarding02(pessoa:Pessoa){
  return (
    `
    Seja bem-vindo ${pessoa.nome}! 
    Sua função aqui na empresa será ${pessoa.funcao}
    `
  );
}
// console.log(onboarding02({nome:'HUdneu', funcao:'Dev Web'}));

//Exemplo 04 => object com type alias (usadno interface)
type Pessoa03 = {
  nome:string;
  funcao:string;
  linguagem:string
}

function onboarding03(pessoa:Pessoa03){
  return (
    `
    Seja bem-vindo ${pessoa.nome}! 
    Sua função aqui na empresa será ${pessoa.funcao}
    E trabalhará com ${pessoa.linguagem}
    `
  );
}
// console.log(onboarding03({nome:'HUdneu', funcao:'Dev Web', linguagem:'Javascript / Typescript'}));

//Exemplo 05 => usando optional no object
interface Pessoa04 {
  nome:string;
  funcao:string;
  linguagem:string;
  email?: string;
}
function onboarding04(pessoa:Pessoa04){
  return (
    `
    Seja bem-vindo ${pessoa.nome}! 
    Sua função aqui na empresa será ${pessoa.funcao}
    E trabalhará com ${pessoa.linguagem}
    `
  );
}
// console.log(onboarding04({nome:'Hudney', funcao:'Dev Web', linguagem:'Javascript / Typescript'}));

//Exemplo 06 => /* Propriedade 'readonly' (Se deseja proibir que os devs não modifiquem um determinado objeto use o readonly) */
interface Pessoa05 {
  nome:string;
  funcao:string;
  linguagem:string;
  readonly email: string; //Não poderá ser modificada
}
function onboarding05(pessoa:Pessoa05){
  return (
    `
    Seja bem-vindo ${pessoa.nome}! 
    Sua função aqui na empresa será ${pessoa.funcao}
    E trabalhará com ${pessoa.linguagem}
    Seu email será ${pessoa.email}
    `
  );
}
/* console.log(onboarding05(
  {
    nome:'Hudney', 
    funcao:'Dev Web', 
    linguagem:'Javascript / Typescript', 
    email: 'hudney@brito.com'
  }
)); */

//Exemplo 07 => Tipos de extenções (heranças)
interface Mae {
  nome: string;
}
interface Pai {
  sobrenome: string;
}
interface Filha extends Mae, Pai {
  idade: number
}

const filha: Filha = {
  nome: 'Hudney',
  sobrenome: 'Brito',
  idade: 37,
}

// console.log(filha);


//Exemplo 08 => Tipos de interações

interface Cachorro {
  tipo: string;
}
interface Gato{
  tipo: string;
}
type Animal = Cachorro & Gato; //intersseção


//Exemplo 09 => Generic Objects
type Usuario = {
  nome: string;
  email: string;
}

type Admin = {
  nome: string;
  email: string;
  admin: boolean;
}

const usuario: Usuario = {
  nome: 'Hudney',
  email: 'hudney@Brito.com'
}
const admin: Admin = {
  nome: 'Hudney',
  email: 'hudney@Brito.com',
  admin: true,
}

function acessarSistema<T>(usuario: T): T {
  return usuario
}
console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));

// function acessarSistema(usuario:Usuario) {
//   return usuario
// }
// console.log(acessarSistema(usuario));


