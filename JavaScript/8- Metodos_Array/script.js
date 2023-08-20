// 1- Acessando Elementos:
const frutas = ["Banana", "Laranja", "Maçã", "Manga"];
console.log("ACESSANDO ELEMENTOS:");
// 1.1- Por índice:
console.log(frutas[1]);

// 1.2- Acessar o primeiro elemento:
console.log(frutas[0]);

// 1.3- Acessar o último elemento:
console.log(frutas[frutas.length - 1]);


// 2- Métodos Array:
console.log("MÉTODOS ARRAY:");
const carros = ["Gol", "Montana", "BMW", "Porsche", "Monza"]
console.log(carros);

// 2.1- Converter para string -> toString()
console.log("toString():");
console.log(carros.toString());

// 2.2- Converter para string -> join()
console.log("join():");
console.log(carros.join("- "));

// 2.3- Tamanho do array -> length()
console.log("length:");
console.log(carros.length);

// 2.4- Remover o último elemento -> pop()
console.log("pop():");
carros.pop();
console.log(carros);

// 2.5- Adicionar um novo elemento no último -> push()
console.log("push():");
carros.push("Ferrari");
console.log(carros);

// 2.6- Remover o primeiro elemento -> shift()
console.log("shift():");
carros.shift();
console.log(carros);

// 2.7- Adicionar um novo elemento no primeiro -> unshift()
console.log("unshift():");
carros.unshift("Mercedes");
console.log(carros);

// 2.8- Concatenando array -> concat ()
const Meninas = ["Carolina", "Leticia"];
const Meninos = ["Eduardo", "Tomas", "Luan"];
console.log("concat():");
console.log(Meninas.concat(Meninos));

// 2.9- Adicionar um novo elemento no array na posição desejada -> splice(posição desejada, quantos elementos removidos, "valores")
console.log("splice():");
carros.splice(2, 0, "Volkswagen", "Argo");
console.log(carros);

// 2.10- Dividir um pedaço da matriz -> slice()
console.log("slice():");
const dividida = carros.slice(2);
console.log(dividida);




// 3- Ordenação de Array:
console.log("ORDENAÇÃO DE ARRAY:");
var numeros = [2, 1, 4, 3, 7, 5, 8, 6, 9];

// 3.1- Ordena em ordem alfabética -> sort():
console.log("sort():");
console.log(numeros.sort());

// 3.2- Invete os elementos -> reverse():
console.log("reverse():");
console.log(numeros.reverse());

// 3.3- Encontrar o maior número:
console.log("Maior Número:");
numeros.sort(function (a, b) {
    return b - a
});
console.log(numeros[0]);

// 3.4- Encontrar o menor número:
console.log("Menor Número:");
numeros.sort(function (a, b) {
    return a - b
});
console.log(numeros[0]);

// 3.5- Ordem aleatória em um array -> random()
console.log("random():");
aleatorioNumero = numeros.sort(function () { return 0.5 - Math.random() });
console.log(aleatorioNumero);


// 4- Iteração do array:
console.log("ITERAÇÃO DO ARRAY:");
const numeros1 = [45, 4, 9, 16, 25];

// 4.1- Retorna cada elemento do array-> forEach();
console.log("forEach():");
iteraArray = numeros1.forEach(function (num) {
    console.log(num);
});

// 4.2- Nova matriz em cada elemento -> map()
console.log("map():");
const numeros2 = numeros1.map(minhaFuncao);
function minhaFuncao(value) {
    return value * 2;
};
console.log(numeros2);

// 4.3 Filtrar a matriz -> filter()
console.log("filter():");
const maior18 = numeros1.filter(minhaFuncao2);
function minhaFuncao2(value) {
  return value > 18;
}
console.log(maior18);

// 4.4- Reduzir em único valor -> reduce()
console.log("reduce():");
const soma = numeros1.reduce(minhaFuncao3);
function minhaFuncao3(total, valor){
    return total + valor;
}
console.log(soma);

// 4.5- Todos valores passam em um teste -> every()
console.log("every():");
const todosMaiores18 = numeros1.every(minhaFuncao4);
function minhaFuncao4(valor) {
    return valor > 18;
}
console.log(todosMaiores18);

// 4.6- Alguns valores passam em um teste -> some()
console.log("some():");
const someMaior18 = numeros1.some(minhaFuncao5);
function minhaFuncao5(valor) {
    return valor > 18;
}
console.log(someMaior18);

// 4.7- Retorna a posição no array -> indexOf()
console.log("indexOf():");
console.log(numeros1.indexOf(9) + 1);

// 4.8- Retorna a última posição no array -> lastIndexOf()
const numeros3 = [1, 2, 3, 4, 5, 3, 3, 6];
console.log("lastIndexOf():");
console.log(numeros3.lastIndexOf(3) + 1);

// 4.9- Retornar o primeiro elemento que passa no teste -> find()
console.log("find():");
let first = numeros1.find(minhaFuncao6)
function minhaFuncao6(valor) {
    return valor < 18;
}
console.log(first);

// 4.10- Retornar as chaves -> keys()
console.log("keys():");
const keys = numeros1.keys();

for (let x of keys) {
    console.log(x);
}

// 4.11- Retorna um array com pares chave/valor -> entries()
console.log("entries():");
const teste = numeros1.entries();

for (let x of teste) {
    console.log(x);
}

// 4.12- Verifica se o elemento está no array -> includes()
console.log("includes():");
console.log(numeros1.includes(4));

// 4.13 Expandir vários arrays em um array -> Spread(..)
const mesUm = ["Janeiro", "Fevereiro", "Março"];
const mesDois = ["Abril", "Maio", "Junho"];
const mesTres = ["Julho", "Agosto", "Setembro"]
const mesQuatro = ["Outubro", "Novembro", "Dezembro"]
console.log("Spread:");
const ano = [...mesUm, ...mesDois, ...mesTres, ...mesQuatro];
console.log(ano);