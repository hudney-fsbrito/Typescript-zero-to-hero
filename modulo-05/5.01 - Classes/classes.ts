// Exempo 01 -Classes
export { }
class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(): string{
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa ('Hudney', 'Brito');
console.log(pessoa.nomeCompleto());

// Exempo 02 -Classes (Sem constructor) 
//NÃO ESTÁ FUNCIONANDO - DÁ ERRO!!!

/* class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
}

//Cria um objeto ou a instancia
const estudante = new Estudante();

//Inicializar o objeto
estudante.codigoEstudante = 2435;
estudante.nomeEstudante = 'Pedro Vilena';


console.log(`Código do estudante...: ` + estudante.codigoEstudante);
console.log(`Nome do estudante...: ` + estudante.nomeEstudante); */


// Exempo 03 -Classes (Com constructor)

class Estudante_1 {
    codigoEstudante: number;
    nomeEstudante: string;

    //Definir o Construtor
    constructor(codigoEstudante: number, nomeEstudante: string){
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }

    //Criar o método
    listarEstudante(): void{
        console.log(`Código do estudante...: ` + this.codigoEstudante);
        console.log(`Nome do estudante...: ` + this.nomeEstudante);
    }
}

//Acessar os campos:
const estudante_1= new Estudante_1(7478, 'Pedro Bial');

console.log(estudante_1.listarEstudante());




