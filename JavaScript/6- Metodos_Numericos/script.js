// 1- Adicionando números e strings:
let x = 10;
let y = 20;
let z = x + y;
console.log(z);


// 2- NaN (Não é um Número) ->  indica que um número não é um número válido.
let op = 100 / "Apple";
console.log(op);


// 3- Retornar um número como uma string -> toString()
console.log("toString:");
let op2 = 123; //number
let retornaString = op2.toString(); // number virou string
console.log(retornaString);
console.log(typeof retornaString)


// 4- Retornar um número em notação exponencial -> toExponencial()
console.log("toExponential:");
let op3 = 9.65;
console.log(op3.toExponential(2));
console.log(op3.toExponential(4));
console.log(op3.toExponential(6));

 
// 5- Retornar um número com casas decimais determinadas -> toFixed()
console.log("toFixed:");
let op4 = 4.56783;
console.log(op4.toFixed(2));
console.log(op4.toFixed(4));
console.log(op4.toFixed(6));


// 6- Retornar um número com um comprimento especificado -> toPrecision()
console.log("toPrecision:");
let op5 = 6.58496;
console.log(op5.toPrecision(2))
console.log(op5.toPrecision(4));
console.log(op5.toPrecision(6));



// 7- Retornar um número como um número -> valueOf()
console.log("ValueOf:");
let op6 = 2945;
console.log(op6.valueOf());



// 8- Convertendo Variáveis em Números:
console.log("Convertendo Variáveis em Números:");

// 8.1- Number() -> Retorna um número convertido de seu argumento.
console.log("Number:");
console.log(Number("123"));
console.log(Number(true));
console.log(Number(false));
console.log(Number("10.33"));
console.log(Number(new Date("2003-05-20"))); // retorna milissegundos

// 8.2- parseFloat() -> Retorna um número de ponto flutuante.
console.log("parseFloat:");
console.log(parseFloat("139"));
console.log(parseFloat("10.55"));
console.log(parseFloat("9.99999"));
console.log(parseFloat("10 anos"));

// 8.3 parInt() -> Retorna um número inteiro.
console.log("parseInt:");
console.log(parseInt("139"));
console.log(parseInt("10.55"));
console.log(parseInt("9.9999"));
console.log(parseInt("12.344444"));



// 9- O método Math:
console.log("O método math:")

// 9.1- Inteiro mais próximo -> Math.round(x)
console.log("Math.round:");
console.log(Math.round(4.6));
console.log(Math.round(4.4));
console.log(Math.round(0.555));

// 9.2- Arredonda para cima -> Math.ceil(x)
console.log("Math.ceil:");
console.log(Math.ceil(3.6));
console.log(Math.ceil(5.4));
console.log(Math.ceil(0.222));

// 9.3- Arredonda para baixo -> Math.floor(x)
console.log("Math.floor:");
console.log(Math.floor(5.6));
console.log(Math.floor(2.7));
console.log(Math.floor(1.222));

// 9.4- Retorna a parte inteira -> Math.trunc(x)
console.log("Math.trunc:");
console.log(Math.trunc(9.6));
console.log(Math.trunc(8.4));
console.log(Math.trunc(7.222));

// 9.5- Retorna 1(+) -1(-) ou 0-> Math.sign(x)
console.log("Math.sign:");
console.log(Math.sign(3));
console.log(Math.sign(-5));
console.log(Math.sign(0));

// 9.6- Eleva o x ao y -> Math.pow(x,y)
console.log("Math.pow:");
console.log(Math.pow(3, 1));
console.log(Math.pow(5, 2));
console.log(Math.pow(2, 4));

// 9.7- Retorna a raiz quadrada -> Math.sqrt(x)
console.log("Math.sqrt:");
console.log(Math.sqrt(9));
console.log(Math.sqrt(100));
console.log(Math.sqrt(49));

// 9.8- Retorna o valor positivo -> Math.abs()
console.log("Math.abs:");
console.log(Math.abs(-3.6));
console.log(Math.abs(-5));
console.log(Math.abs(-200));

// 9.9- Retorna o seno -> Math.sin()
console.log("Math.sin:");
console.log(Math.sin(90 * Math.PI /180));
console.log(Math.sin(45 * Math.PI /180));
console.log(Math.sin(60 * Math.PI / 180));

// 9.10- Retorna o cosseno -> Math.cos()
console.log("Math.cos:");
console.log(Math.cos(90 * Math.PI /180));
console.log(Math.cos(45 * Math.PI /180));
console.log(Math.cos(0 * Math.PI / 180));

// 9.11- Retorna o valor mais baixo -> Math.min()
console.log("Math.min:");
console.log(Math.min(100, -20, -150, 2, -40));
console.log(Math.min(50, -10, 200, 20, -60));
console.log(Math.min(200, 10, 500, 5, 0));

// 9.12- Retorna o valor mais alto -> Math.max()
console.log("Math.max:");
console.log(Math.max(100, -20, -150, 2, -40));
console.log(Math.max(-50, -10, -20, 0, -60));
console.log(Math.max(200, 10, 500, 5, 0));

// 9.13- Retorna um valor aleatório (entre 0 e 1) -> Math.random()
console.log("Math.random:");
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// 9.14- Retorna o logaritmo de x-> Math.log()
console.log("Math.log:");
console.log(Math.log2(64));
console.log(Math.log2(8));
console.log(Math.log2(256));