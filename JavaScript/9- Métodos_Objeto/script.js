// 1- Acessar propriedade do Objeto:
const pessoa = { Nome: "João", Sobrenome: "Gomes", Idade: 30, olhoCor: "Azul" };
console.log(pessoa);

console.log("ACESSAR PROPRIEDADE:");
console.log(pessoa.Nome);
console.log(pessoa["Idade"]);
console.log(pessoa.Sobrenome);
console.log(pessoa["olhoCor"]);


// 2- Adicionar nova propriedades;
console.log("ADICIONAR PROPRIEDADE:");
pessoa.Nacionalidade = "Brasileiro";
console.log(pessoa)


// 3- Excluindo Objetos:
console.log("EXCLUIR PROPRIEDADE:");
delete pessoa.Nacionalidade;
console.log(pessoa);


// 4- Loop em objeto: -> For in
console.log("LOOP OBJETO:");
for (let x in pessoa) {
    console.log(pessoa[x]);
}


// 5- Métodos Objeto:
console.log("MÉTODOS DO OBJETO:");
const pessoa2 = {
    Nome: "Marcelo",
    Sobrenome: "Silva",
    id: 5566,
    nomeCompleto: function() {
      return this.Nome + " " + this.Sobrenome;
    }
};
console.log(pessoa2.nomeCompleto());

// 5.1- Letras Maiúsculas: -> toUpperCase
console.log("TUDO MAIÚSCULO:");
pessoa2.letraGrande = function() {
    return (this.Nome+ " " + this.Sobrenome).toUpperCase();
};
console.log(pessoa2.letraGrande())

// 5.2- Converter obj em array: -> object.values()
console.log("OBJ EM ARRAY:");
const meuArray = Object.values(pessoa);
console.log(meuArray);

// 5.3- Converter obj em string: -> JSON.stringify()
console.log("OBJ EM STRING:");
const minhaString = JSON.stringify(pessoa);
console.log(minhaString);


// 6- Conjuntos:
console.log("CONJUNTOS:");

// 6.1- new set():
console.log("new Set():");
const letters = new Set(["a","b","c"]);
console.log(letters.size);
console.log(letters);

// 6.2- add():
console.log("add():");
letters.add("d");
letters.add("e");
console.log(letters);

// 6.3- forEach():
console.log("forEach():");
let texto = "";
letters.forEach(function (value) {
    texto += value;
});
console.log(texto);

// 6.4- entries():
console.log("entries():");
const myIterator = letters.entries();
let texto2 = "";
for (const entry of myIterator) {
  texto2 += entry;
}
console.log(texto2);