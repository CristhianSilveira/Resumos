// undefined
var SemNome;
console.log(SemNome);

//string
var nome = "Cristhian";
console.log(nome);

//number
var numero = 10;
console.log(numero);

//soma
var soma = 5 + 3 + 10;
console.log(soma);

//string
var numeroString = "10";
console.log(numeroString);

// concatenação
var concatena = "Olá," + " Mundo!";
console.log(concatena);

// Concatenando string com número
var concatenaString = "5" + 2 + 3; // Tudo vira String
console.log(concatenaString);

var ConcatenaNumero = 2 + 3 + "5"; //Soma e depois junta com a string
console.log(ConcatenaNumero);



/* VARIÁVEIS:
var nome = "valor"; */

// LET
console.log("LET:");

let nomeCompleto = "João Gomes";
// let nomeCompleto = "Matheus Santos"; -> Não pode ser redeclarada

{
    let nomeCompleto = "Matheus Santos"; // Variáveis ​​definidas com let têm escopo de bloco
    console.log(nomeCompleto);
}
console.log(nomeCompleto);

nomeCompleto = "Carlos Alberto"; //  É um valor que pode ser alterado ao longo do programa
console.log(nomeCompleto)



// CONST -> Sempre declare com const quando souber que o valor não deve ser alterado.
console.log("CONST:");

const numero1 = 10;
// const numero1 = 15; -> Não pode ser redeclarada

{
    const numero1 = 15 ; // Variáveis ​​definidas com const têm escopo de bloco
    console.log(numero1);
}
console.log(numero1);

// numero1 = 30 -> O valor não muda ao longo do programa */
