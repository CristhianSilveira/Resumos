// 1- Callback:
// 1.1- Sequência de função:
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

// 1.2- Callback:
console.log("CALLBACK:");

function meuDisplay(algum) {
    console.log(algum)
}

function minhaCalculadora(num1, num2, myCallback) {
    let soma = num1 + num2;
    myCallback(soma);
}
minhaCalculadora(5, 5, meuDisplay);



// 2- Assíncrono:
console.log("ASSÍNCRONO:");

// 2.1- setTimeout():
console.log("setTimeout():");

function myFunction() {
    console.log("Passou 3 segundos")
}
let myVar2 = setTimeout(myFunction, 3000);

// 2.2- clearTimeout:
console.log("clearTimeout():");

// 2.3- setInterval():
console.log("setInterval():");

function minhaFunction() {
    console.log("Passou muitos segundos")
}
let myVar = setInterval(minhaFunction, 4000);

// 2.4- clearInterval():
console.log("clearInterval():");


// 3- Promises:
console.log("PROMISES:");
  
let Promessa = new Promise(function(Resolve, Reject) {
    let x = 0;
    
    if (x == 0) {
      Resolve("OK");
    } else {
      Reject("Erro");
    }
});
  
Promessa.then(
    function (value) {
        console.log(value)
    },
    function (erro) {
        console.log(erro)
    }
);


// 5- Async:
console.log("Async:");
async function minhaFuncao() {
    return "Hello";
}
minhaFuncao().then(
    function(value) {
          console.log(value)
    },
    function (error) {
        console.log(error)
    }
);



// 6- await:
console.log("await:");
async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("Te amo!");
    });
    console.log(await myPromise);
}
  
myDisplay();
