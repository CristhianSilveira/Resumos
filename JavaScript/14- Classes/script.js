// 1- Classe
console.log("Classe:");
class Carro {
    constructor(nome, ano) {
      this.nome = nome;
      this.ano = ano;
    }
};
console.log(Carro);

// 2- Criando objeto:
console.log("Criando objeto:");
const myCar1 = new Carro("Ford", 2014);
const myCar2 = new Carro("Audi", 2019);
console.log(myCar1);
console.log(myCar2);

// 3- Herdar Classe:
console.log("Herdar Classe:");
class Modelo extends Carro{
    constructor(nome, ano, modelo) {
        super(nome, ano);
        this.modelo = modelo;
    }
}
const myCar3 = new Modelo("Fiat", 2010, "Uno");
console.log(myCar3);

// 4- Hosting:

/* Não pode: 
const myCar4 = new Carro("Ford", 2014);

class Carro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
};

// Pode:
const myCar4 = new Carro("Ford", 2014)
*/