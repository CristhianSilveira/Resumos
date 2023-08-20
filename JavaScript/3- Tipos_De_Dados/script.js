// 1- STRING -> Sempre entre aspas
console.log("STRING:");

var string = "Cristhian";
console.log(string);

var texto = "O rato roeu a roupa do rei de roma";
console.log(texto);



// 2- NUMBER -> É o tipo para números
console.log("NUMBER:");

let numero = 10;
console.log(numero);

let numero2 = 5.5
console.log(numero2)



// 3- BOOLEAN -> true ou false
console.log("BOOLEAN:");

let verdade = (10 > 9);
console.log(verdade);

let falso = (10 < 9);
console.log(falso);



// OBJETO -> Sempre escrita com nome:valor
console.log("OBJECT:");

const pessoa = {
    PrimeiroNome: "João",
    Sobrenome: "Silva",
    idade: 50,
    CorOlho: "Azul"
};
console.log(pessoa);



// Array -> É considerado uma lista
console.log("ARRAY:");

const carros = ["Volvo", "BMW", "Uno", "Saveiro"];
console.log(carros);



// UNDEFINED -> Variável criada sem valor
console.log("UNDEFINED:");

let carro;
console.log(carro);



// NULL -> Variável vazia
console.log("NULL:");

let carro2 = "";
console.log(carro2);



// TYPEOF -> Retorna o tipo da variável
console.log("TYPEOF:");

console.log(typeof "João"); //string
console.log(typeof 10); // number
console.log(typeof (10 > 9)); // boolean
console.log(typeof { PrimeiroNome: "João", Sobrenome: "Silva", idade: 50, CorOlho: "Azul" }); // object
console.log(typeof ["Volvo", "BMW", "Uno", "Saveiro"]); // Array retorna object
console.log(typeof teste); // undefined
console.log(typeof ""); // null retorna string



// Conversão de tipo:
console.log("Converter Tipo:");

// String em número:
console.log("String em Número:");
console.log(Number("3.14"));
console.log(Number(Math.PI));
console.log(Number(""));

// Número em string:
console.log("Número em string:");
console.log(String(123));
console.log(String(100 + 25));

// Boolean em número:
console.log("Boolean em número:");
console.log(Number(false));
console.log(Number(true));

// Boolean em string:
console.log("Boolean em string:");
console.log(String(false));
console.log(String(true));
