// 1- Métodos JSON:
console.log("MÉTODOS JSON:");

// 1.1- parse() objeto:
console.log("parse() objeto:");

const txt = '{"nome":"João", "idade":30, "cidade":"São Paulo"}'
const obj = JSON.parse(txt);
console.log(obj);

// 1.1- parse() matriz:
console.log("parse() matriz:");

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr);

// 1.2- stringify() objeto:
console.log("stringify() objeto:");

const obj2 = { nome: "Carlos", idade: 25, cidade: "Bahia" };
const myJSON = JSON.stringify(obj2);
console.log(myJSON);

// 1.2- stringify() matriz:
console.log("stringify() matriz:");

const arr = ["João", "Peter", "Saulo", "Jamile"];
const myJSON2 = JSON.stringify(arr);
console.log(myJSON2);



// 2- Liteiras do Objeto:
console.log("LITERAIS DO OBJETO:");
const myJSON3 = '{"nome":"Marcos", "idade":20, "carro":null}';
const myObj = JSON.parse(myJSON3);

// 2.1- Acessando Valores de Objeto:
console.log("Acessar Valores object JSON:");

console.log(myObj.nome);
console.log(myObj.idade);
console.log(myObj.carro);

// 2.2- Fazendo um loop nas propriedades:
console.log("Loop nas propriedades:");
let texto = "";
for (const x in myObj) {
  texto += x + ", ";
}
console.log(texto);

// 2.3- Fazendo um loop nos valores:
console.log("Loop nos valores:");
let texto2 = "";
for (const x in myObj) {
    texto2 += myObj[x] + ", ";
}
console.log(texto2);



// 3- Literais de Array:
const myJSON4 = '["Ford", "BMW", "Fiat"]';
const myArray = JSON.parse(myJSON4);

// 3.1- Acessando Valores de Array:
console.log("Acessar Valores JSON array:");
console.log(myArray[1]);

// 3.2- Percorrendo um array JSON:
console.log("Percorrendo um array JSON:");
let texto3 = "";
for (let i in myArray) {
  texto3 += myArray[i] + ", ";
}
console.log(texto3);