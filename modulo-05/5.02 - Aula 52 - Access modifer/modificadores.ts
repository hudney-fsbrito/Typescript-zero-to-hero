//Exemplo 01 - Modificador: public

class Estudante { //Não precisa colocar a palavra public pois já está implicito
    codigoEstudante: number;
    nomeEstudante: string;

    
    constructor(codigoEstudante: number, nomeEstudante: string) {
     this.codigoEstudante = codigoEstudante;
     this.nomeEstudante = nomeEstudante;
    }
}
const estudante = new Estudante (3456, 'Hudney')

//Exemplo 02 - Modificador: private
class Estudante_02 { 
    codigoEstudante: number;
    nomeEstudante: string;
    private idade: number;
    
    constructor(codigoEstudante: number, nomeEstudante: string, idade: number) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    }

    retornarDadosDoEstudante(){
        return `Código do aluno: ${this.codigoEstudante} / Nome do estudante: ${this.nomeEstudante} / Idade do estudante: ${this.idade}`
    }
}
const estudante_02 = new Estudante_02 (9876, 'Fernandez', 37)
console.log(estudante_02.retornarDadosDoEstudante());

//Exemplo 03 - Modificador: protected

class Estudante_03 { 
    codigoEstudante: number;
    private turma: number;
    protected nomeEstudante: string;

    constructor(codigoEstudante: number, turma:number,  nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.turma = turma;
        this.nomeEstudante = nomeEstudante;
    }
    retornarDadosDoEstudante_03(){
        return `
        Código do aluno: ${this.codigoEstudante} /
        Nome do estudante: ${this.nomeEstudante} /
        Turma do estudante: ${this.turma}`
    }
}

class Pessoa extends Estudante_03 {
    private curso: string;
    
    constructor(
        codigoEstudante: number,
        turma:number,
        nomeEstudante: string,
        curso:string) {
            
        super(codigoEstudante, turma, nomeEstudante);
        this.curso = curso;
    }
    retornarDadosDoAluno(){
        return `
        Código do aluno: ${this.codigoEstudante} /
        Nome do estudante: ${this.nomeEstudante} /
        Curso do estudante: ${this.curso}`
    }
}
const estudante_03 = new Estudante_03 (1234, 7,'Brito')
const estudante_04 = new Pessoa (1234, 7,'Brito', 'Front End')
console.log(estudante_03.retornarDadosDoEstudante_03());
console.log(estudante_04.retornarDadosDoAluno());
//Exemplo 04 - Modificador: readonly