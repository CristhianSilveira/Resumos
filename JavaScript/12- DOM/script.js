// 1- ENCONTRANDO ELEMENTOS
console.log("ENCONTRANDO ELEMENTOS:");

// 1.1- Por Id:
console.log("Id:");
var porId = document.getElementById("encontra");
console.log(porId);

// 1.2- Por tag:
console.log("Tag:");
var porTag = document.getElementsByTagName("h2[2]");
console.log(porTag);

// 1.3- Por Classe:
console.log("Classe:");
var porClasse = document.getElementsByClassName("encontrado");
console.log(porClasse);

// 1.4- Query selector:
console.log("query Selector:");
var porSeletor = document.querySelector("#encontra");
console.log(porSeletor);

// 1.5- Query selector all:
console.log("query Selector all:");
var porSeletorAll = document.querySelectorAll("#encontra");
console.log(porSeletorAll);



// 2- Alterar Elemento:
console.log("ALTERAR ELEMENTO:");

// 2.1- innerHTML:
console.log("innerHTML:");
var teste = document.getElementById("teste").innerHTML = "Mudei o texto com innerHTML";
console.log(teste);

// 2.2- attribute:
console.log("attribute:");
var imagem = document.getElementById("myImage").src = "landscape.jpg";
console.log(imagem);

// 2.3- textContent:
console.log("textContent:");
var texto = document.getElementById("texto");
texto.textContent = "Mudei o texto com textContent";
console.log(texto.textContent);


// 3- Validar Formulário:

// 3.1- Entrada Vazia:
function validateForm() {
    let x = document.forms["myForm"]["nome"].value;
    if (x == "") {
      alert("Insira o nome para continuar");
      return false;
    }
}

// 3.2- Entrada numérica:
function myFunction() {
    let x = document.getElementById("num").value;
    if (isNaN(x) || x < 1 || x > 10) {
        alert("Valor inválido");
    } else {
        alert("Valor valido");
    }
}



// 4- Alterar CSS:
console.log("ALTERAR CSS:");
var css = document.getElementById("mudaCor");
css.style.backgroundColor = 'blue';
css.style.color = 'white';
console.log(css);



// 5- addEventListener:
console.log("addEventListener:");
var elemento = document.getElementById("elemento");
elemento.addEventListener("click", function () { alert("Hello World!"); });



// 6- Criando elemento com nó:
console.log("CRIANDO ELEMENTO COM NÓ:");
// 6.1- createElement:
console.log("createElement:");
const elemento2 = document.getElementById("div1");

const paragrafo = document.createElement("p");
const texto2 = document.createTextNode("Agora eu sou o primeiro filho!");
console.log(paragrafo);

// 7- Adicionar elemento no HTML:
// 7.1- appendChild:
console.log("appendChild:");
paragrafo.appendChild(texto2);
console.log(paragrafo);

// 7.2- insertBefore(elementoCriado, Local):
console.log("insertBefore:");
const child = document.getElementById("p1");
elemento2.insertBefore(paragrafo, child);
console.log(elemento2);

// 8- Remover Elemento no HTML:
// 8.1- remove():
console.log("remove():");
const apagar = document.getElementById("apagado");
apagar.remove();
console.log(apagar);

// 8.2- removeChild:
console.log("removeChild:");
const pai = document.getElementById("div1");
const filho = document.getElementById("apagar");
pai.removeChild(filho);
console.log(filho);

// 9- Substituir elemento:
// 9.1- replaceChild():
console.log("replaceChild:");
const div = document.getElementById("div1");
const substituir = document.getElementById("subs");

const para = document.createElement("p");
const node = document.createTextNode("Meu texto substituído");
para.appendChild(node);

div.replaceChild(para, substituir);
console.log(para);

// 10- Acessar elementos pai e filho:
// 10.1- parentNode:
console.log("parentNode:");
console.log(para.parentNode);

// 10.2- childNodes:
console.log("childNodes:");
console.log(div.childNodes[1]);

// 10.3- firstChild:
console.log("firstChild:");
console.log(div.firstChild);

// 10.4- lastChild:
console.log("lastChild:");
console.log(div.lastChild);

// 10.5- nextSibling:
console.log("nextSibling:");
console.log(paragrafo.nextSibling);

// 10.6- previousSibling:
console.log("previousSibling:");
console.log(p1.previousSibling);



// 11- Manipular classe do CSS
// 11.1- Adicionar classe
console.log("Adicionar Classe:");
const comClasse = document.querySelector("#colocaClasse");
comClasse.classList.add("novaClasse");
console.log(comClasse);

// 11.2- Remover Classe
console.log("Remover Classe:");
const semClasse = document.querySelector(".comClasse");
semClasse.classList.remove("comClasse");
console.log(semClasse)

// 11.3- Verifica se a classe existe ou não
console.log("toggle:");
comClasse.classList.toggle("novaClasse");
console.log(comClasse);
