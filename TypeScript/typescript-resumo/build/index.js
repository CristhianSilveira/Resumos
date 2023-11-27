"use strict";
// TIPOS SIMPLES DE VARIÁVEL
console.log("-- TIPOS SIMPLES ---");
// boolean
let certo = true;
console.log(typeof certo);
// number
let num = 10;
console.log(typeof num);
// string
let teste = "teste";
console.log(typeof teste);
// ATRIBUIÇÃO DE VARIÁVEL:
// Tipo Explícito: Você atribui automaticamente o tipo da variável.
let nome = "Darlan";
// Tipo Implícito: O TypeScript irá "adivinhar" o tipo, com base no valor atribuído.
let nome2 = "Darlan";
// TIPOS ESPECIAIS:   
console.log("--- TIPOS ESPECIAIS ---");
// any: desabilita a verificação de tipo e efetivamente permite que todos os tipos sejam usados.
console.log("> any:");
let v = 123456;
v = "testando";
console.log(typeof v);
// unknown: semelhante ao any, mas mais segura.
console.log("> unknown");
let w = "teste";
w = 12345;
console.log(typeof w);
// ARRAYS(MATRIZES):
console.log("--- ARRAYS ---");
const nomes = ["Gabriel", "Tomas"];
nomes.push("Carlos");
console.log(nomes);
// readonly: impede que os arrays sejam alterados
console.log("> readonly");
const names = ["Darlan", "Marcelo", "Alice", "Ana"];
// names.push("Andre"); Dá erro
console.log(names);
// TUPLAS:
console.log("--- TUPLAS ---");
let myTupla;
myTupla = [5, false, "Testando tupla"];
//tupla = [false, 5, "Testando tupla"]; Dá erro
console.log(myTupla);
// readonly: impede que as tuplas sejam alteradas
console.log("> readonly");
let myTupla2;
myTupla2 = [true, "Teste", 5, 100];
// myTupla2.push = ["Teste"]; Dá erro
console.log(myTupla2);
// tupla nomeada: fornece tipo aos valores de índice:
console.log("> Tupla Nomeada");
const reta = [55, 41];
console.log(reta);
// OBJETOS:
console.log("--- OBJETOS ---");
const carro = {
    tipo: "Toyota", modelo: "Corolla", ano: 2009
};
console.log(carro);
// Propriedades opcionais: não precisam ser definidas.
console.log("> Propriedade Opcional");
const carro2 = {
    tipo: "Mercedes", modelo: "SUV", ano: 2010
};
console.log(carro2);
// ENUMS -> Um enum é uma "classe" especial que representa um grupo de constantes (variáveis ​​imutáveis)
console.log("--- ENUMS ----");
// enum numérico:
console.log("> Enums Numérico");
var DirecaoCardinal;
(function (DirecaoCardinal) {
    DirecaoCardinal[DirecaoCardinal["Norte"] = 1] = "Norte";
    DirecaoCardinal[DirecaoCardinal["Leste"] = 4] = "Leste";
    DirecaoCardinal[DirecaoCardinal["Sul"] = 2] = "Sul";
    DirecaoCardinal[DirecaoCardinal["Oeste"] = 3] = "Oeste";
})(DirecaoCardinal || (DirecaoCardinal = {}));
;
let DirecaoAtual = DirecaoCardinal.Norte;
let DirecaoAnterior = DirecaoCardinal.Oeste;
console.log(DirecaoAtual);
console.log(DirecaoAnterior);
// enum string:
console.log("> Enum String");
var Direcao;
(function (Direcao) {
    Direcao["Norte"] = "Norte";
    Direcao["Leste"] = "Leste";
    Direcao["Sul"] = "Sul";
    Direcao["Oeste"] = "Oeste";
})(Direcao || (Direcao = {}));
;
console.log(Direcao.Norte);
console.log(Direcao.Sul);
// ALIASES E INTERFACE
// ALIASES: Permitem definir tipos com um nome personalizado (um Alias).
console.log("--- ALIASES ---");
const carroAno = 2001;
const carroTipo = "Toyota";
const carroModelo = "Corolla";
const carro3 = {
    ano: carroAno,
    tipo: carroTipo,
    modelo: carroModelo // valor da const carroModelo = Corolla
};
console.log(carro3);
// Interface: Permitem definir tipos com um nome personalizado, Porém só em objetos.
console.log("--- INTERFACES ---");
const retangulo = {
    Altura: 20,
    Largura: 10
};
console.log(retangulo);
// UNION TYPE: ​​quando um valor pode ser mais de um único tipo.
console.log("--- UNION TYPE ---");
function Status(codigo) {
    console.log(`Meu código de status é: ${codigo}.`);
}
Status(404);
Status('ERRO: 404');
// FUNÇÕES:
console.log("--- FUNÇÕES ---");
// Tipo de retorno
console.log("> Tipo de Retorno");
// padrão -> retorna algo
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
// sem retorno -> void(indica que a função não tem retorno)
console.log(">> void");
function printHello() {
    console.log('Hello!');
}
printHello();
// Parâmetros
console.log("> Parâmetros");
function multiplica(a, b) {
    return a * b;
}
console.log(multiplica(2, 5));
// Type Aliases
console.log("> Aliases");
const negativaFuncao = (valor) => valor * -1;
console.log(negativaFuncao(10));
// CASTING
console.log("--- CASTING ---");
let x = 'Olá';
console.log(x.length);
// CLASSES
console.log("--- CLASSES ---");
// Membros de tipo:
console.log("> Membros de tipo");
class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}
const pessoa1 = new Pessoa("Jaqueline", 20, "Feminino");
const pessoa2 = new Pessoa("Alberto", 30, "Masculino");
console.log(pessoa1);
console.log(pessoa2);
// Herança
console.log("> Herança");
// implements
console.log(">> implements");
class Retangulo2 {
    area() {
        return this.largura * this.altura;
    }
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
}
const meuRetangulo = new Retangulo2(10, 20);
console.log(meuRetangulo.area());
// extends
console.log(">> extends");
class Quadrado extends Retangulo2 {
    constructor(largura) {
        super(largura, largura);
    }
}
const meuQuadrado = new Quadrado(20);
console.log(meuQuadrado.area());
// GENÉRICOS
console.log("--- GENÉRICOS ---");
function Soma(v1) {
    return v1;
}
const soma = Soma(40);
const somaString = Soma('40');
console.log(soma);
console.log(somaString);
