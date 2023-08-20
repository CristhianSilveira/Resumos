// 1- Criando um mapa:
console.log("Criando um mapa:");

const frutas = new Map([
    ["Maçãs", 500],
    ["Bananas", 300],
    ["Laranjas", 200]
]);
console.log(frutas);

// 1.2- Adicionando elementos no mapa: -> set()
console.log("set():");
frutas.set("Uva", 100)
frutas.set("Melancia", 900)

console.log(frutas);

// 1.3- Obter valor: -> get()
console.log("get():");
console.log(frutas.get("Bananas"));

// 1.4- Tamanho do mapa: -> size
console.log("size:");
console.log(frutas.size);

// 1.5- Remover elemento: -> delete()
console.log("remove():");
frutas.delete("Uva");
console.log(frutas);

// 1.6- Chave existe ou não: -> has()
console.log("has():");
console.log(frutas.has("Melancia"));

// 1.7- forEach():
console.log("forEach():");
let texto = "";
frutas.forEach (function(valor, chave) {
  texto += chave + ' = ' + valor + "; "
})
console.log(texto);

// 1.8- entry():
console.log("entry():");
let text = '';
for (const x of frutas.entries()) {
    text += x + " ";
}
console.log(text);



// 2- sets():
console.log("SETS:");
const letras = new Set(["a", "b", "c"]);

console.log(letras);

// 2.1- Adicionar elemento: -> add():
console.log("add():");
letras.add("d");
letras.add("e");
console.log(letras);

// 2.2- forEach():
console.log("forEach():");
let texto1 = "";
letras.forEach(function (valor) {
  texto1 += valor + ",";
})
console.log(texto1);

// 2.3- values():
console.log("values():");
let texto2 = "";
for (const x of letras.values()) {
  texto2 += x;
}
console.log(texto2);
