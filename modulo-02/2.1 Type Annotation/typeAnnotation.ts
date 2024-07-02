//Variáveis [Type Annotation]
let nome: string = "Hudney Brito";
console.log(nome);

//Arrays [Type Annotation]
let animais: string[] = ["Elefante", 'Cachorro', 'Panda', "Gato"];
console.log(animais);

//Objetos [Type Annotation]
let carro: {
  nome:string,
  ano:number,
  preco:number
};

carro = {
  nome: 'Toyota',
  ano: 2010,
  preco: 50.000
}
console.log(carro);

//Functions [Type Annotation]
function multiplicaNumero(num1: number, num2: number) {
  return num1 * num2
}
console.log(multiplicaNumero(2,3));



