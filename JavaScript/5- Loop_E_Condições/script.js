// ESTRUTURA DE CONDIÇÃO:
console.log("ESTRUTURA DE CONDIÇÃO:");

// 1- if (se) -> if(condição) { bloco de instrução }
const hora = 17;

console.log("IF:")
if (hora < 18) {
    console.log("Bom Dia");
}

/* 2- if (se) else(senão) -> if (condição)  { bloco de instrução } else  { bloco de instrução } */
const hora2 = 19

console.log("ELSE:")
if (hora2 < 18) {
    console.log("Bom Dia");
}else {
    console.log("Boa Noite");
}

/* 3- if (se) else if(senão se) else(senão) -> if (condição1)  { executa, se a condição 1 for verdadeira }else if (condição2)  { executa, se a condição1 for falsa e a condição2 for verdadeira } else {executa, se a condição1 e condição2 forem falsas } */
const hora3 = 17

console.log("ELSE IF:")
if (hora3 < 12) {
    console.log("Bom dia");
}else if (hora3 < 18){
    console.log("Boa Tarde");
}else {
    console.log("Boa Noite");
}



// ESTRUTURA DE REPETIÇÃO:
console.log("ESTRUTURA DE REPETIÇÃO:");

// 1- for -> for (contador; condição; incremento) { Bloco de execução }
// Mais usado
console.log("FOR:");
for (let i = 0; i < 5; i++){
    console.log("O valor de i é: " + i); //concatenação
}

// 2- for in -> for (chave in objeto) { Bloco de execução }
console.log("FOR IN:");
const pessoa2 = {
    Nome: "João",
    Sobrenome: "Gomes",
    idade: 25
}
let texto1 = "";
for (let teste2 in pessoa2) {
    texto1 = texto1 + pessoa2[teste2];
    console.log(texto1);
}

// 3- for of ->  for (variável of iterable) { Bloco de execução }
console.log("FOR OF:");
const carros3 = ["BMW", "Volvo", "Mini"];
let texto2 = "";
for (let x of carros3) {
    texto2 = texto2 +  x;
    console.log(texto2);
}

// 4- While -> while (condição) { Bloco de execução }
console.log("WHILE:");
let k = 0;
while (k < 5) {
    console.log("O valor de k: " + k);
    k++
}

// 5- do while -> do { Bloco de execução; incremento } while(condição)
console.log("DO WHILE:");
let j = 5;
do {
    console.log("O valor de j é: " + j);
    j--
} while (j > 0);

// 6- switch
console.log("SWITCH:");
const fruta = "Maçã"

switch (fruta) {
    case "Banana":
        console.log("Banana é a fruta!");
        break;
    case "Maçã":
        console.log("Maçã é a fruta!");
        break;
    case "Uva":
        console.log("Uva é a fruta!");
        break;
    default:
        console.log("Fruta não encontrada!");
}