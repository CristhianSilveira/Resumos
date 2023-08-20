// 1- Exemplo
function myFunction(n1, n2) {
    return n1 * n2;
};
console.log(myFunction(5, 2));


// 2- Função de Retorno: -> return
console.log("FUNÇÃO DE RETORNO:");

function myReturn(a, b) {
    // Função retorna o produto de a com b
    return a * b;
}
console.log(myReturn(4, 3));

const testeReturn = 10
function myReturn2() {
    return testeReturn;
}
console.log(myReturn2());


// 3- Invocar Função: -> nome()
console.log("INVOCAR FUNÇÃO:")
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
    
}
console.log(toCelsius(77));

function invoca() {
    return 6 + 2
}
console.log(invoca());


// 4- Hoisting Função: -> declarar antes de fazer a função
console.log("HOISTING:");
console.log(myFunction2(6));

function myFunction2(y) {
    return y * y;
}


// 5- Arrow Function: -> Função de seta
console.log("ARROW FUNCTION:");
const multiplica = (x, y) => x * y;
console.log(multiplica(2, 4));

const arrowFunc = () => {
    var num1 = 5;
    var num2 = 10;
    return num1 + num2;
}
console.log(arrowFunc());


// 6- Parametros da Função -> nome(par1, par2, par3)
console.log("PARÂMETROS DA FUNÇÃO:");
function myFunction3(x, y) {
    if (y === undefined) {
      y = 2;
    }
    return x * y;
}
console.log(myFunction3(3)); // apenas x vale 3


// 7- This:
console.log("THIS:");
const myObject = {
    Nome:"João",
    Sobrenome: "Gomes",
    nomeCompleto: function () {
      return this.Nome + " " + this.Sobrenome;
    }
}
console.log(myObject.nomeCompleto()); 


// 8- Sequência de função:
console.log("SEQUÊNCIA DE FUNÇÃO:");

  
function myFirst() {
    console.log("Hello");
}
  
function mySecond() {
    console.log("Goodbye");
}
myFirst();
mySecond();

mySecond();
myFirst();


// 9- Callback:
console.log("CALLBACK:");

function meuDisplay(algum) {
    console.log(algum)
}

function minhaCalculadora(num1, num2, myCallback) {
    let soma = num1 + num2;
    myCallback(soma);
}
  
minhaCalculadora(5, 5, meuDisplay);
