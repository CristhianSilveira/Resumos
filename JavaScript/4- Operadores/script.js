// OPERADORES ARITMÉTICOS:
console.log("OPERADORES ARITMÉTICOS:");
var opUm = 10;
var opDois = 2;

// 1- Adição (+)
console.log(opUm + opDois);

// 2- Subtração (-)
console.log(opUm - opDois);

// 3- Multiplicação (*)
console.log(opUm * opDois);

// 4- Divisão (/)
console.log(opUm / opDois);

// 5-  Exponenciação (**)
console.log(opUm ** opDois);

// 6- Módulo (%) -> Resto da divisão
console.log(opUm % opDois);

// 7- Incremento (++)
var incremento = 10;
console.log(++incremento);

// 8- Decremento (--)
var decremento = 10;
console.log(--decremento);


//OPERADOR DE ATRIBUIÇÃO:
console.log("OPERADOR DE ATRIBUIÇÃO:");

// 1- Atribuição simples (=)
let Op3 = 10;
console.log(Op3);

// 2- Atribuição de Adição(+=)
Op3 += 5;
console.log(Op3);

// 3- Atribuição de Subtração(-=)
Op3 -= 5;
console.log(Op3);

// 4- Atribuição de Multiplicação(*=)
Op3 *= 5;
console.log(Op3);

// 5- Atribuição de Divisão(/=)
Op3 /= 5;
console.log(Op3);

// 6- Atribuição de Exponenciação(**=)
Op3 **= 2;
console.log(Op3);

// 7- Atribuição de Resto(%=)
Op3 %= 3;
console.log(Op3);



// OPERADORES DE COMPARAÇÃO: Retorna true ou false
console.log("OPERADORES DE COMPARAÇÃO:");

// 1- Igual a (==)
console.log(5 == 5);
console.log("5" == 5);

// 2- Valor Igual ou tipo igual (===)
console.log(5 === 5);
console.log("5" === 5);

// 3- Diferente de (!=)
console.log(5 != 5);

// 4- Valor diferente ou tipo diferente (!==)
console.log(5 !== 5);
console.log("5" !== 5);

// 5- Maior que (>)
console.log(5 > 6);

// 6- Menor que (<)
console.log(5 < 6);

// 7- Maior ou igual a (>=)
console.log(5 >= 6);

// 8- Menor ou igual a (<=)
console.log(5 <= 6);

// 9- Operador Ternário -> (expressão ?verdade :falso)
console.log(5 == 6 ?"Igual" :"Diferente");
console.log(5 == 5 ? "Igual" : "Diferente");



// OPERADORES LÓGICO: Retorna true ou false
console.log("OPERADORES LÓGICO:");

// 1- AND (&&)(e)
console.log("AND:");
console.log(10 > 5 && 20 > 5);
console.log(10 > 5 && 20 < 5);
console.log(10 < 5 && 20 < 5);

// 2- OR (||) (ou)
console.log("OR:");
console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);
console.log(10 < 5 || 20 < 5);

// 3- NOT (!) (não)
console.log("NOT:");
console.log(!(10 > 5 || 20 > 5));
console.log(!(10 > 5 || 20 < 5));
console.log(!(10 < 5 || 20 < 5));