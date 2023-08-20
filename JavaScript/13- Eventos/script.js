// 1- Evento de Mouse:
console.log("EVENTO DE CLIQUE:");

// 1.1- click:
var button = document.querySelector("#btn");
button.addEventListener("click", function () {
    alert("Clicou no botão")
});

// 1.2- mousedown
var teste = document.querySelector("#teste");
teste.addEventListener("mousedown", function () {
    alert("Pressionou o botão")
});

// 1.3- dblclick:
var teste2 = document.querySelector("#teste2");
teste2.addEventListener("dblclick", function () {
    alert("Apertou 2x o botão")
});

// 1.4- mouseup:
var teste3 = document.querySelector("#teste3");
teste3.addEventListener("mouseup", function () {
    alert("Click liberado")
});

// 1.5- mousemove:
var teste4 = document.querySelector("#teste4");
teste4.addEventListener("mousemove", function () {
    alert("Passou o mouse aqui")
});

// 1.6- mouseover:
var teste5 = document.querySelector("#teste5");
teste5.addEventListener("mouseover", function () {
    alert("Entrou com o mouse aqui")
});

// 1.7- mouseout:
var teste6 = document.querySelector("#teste6");
teste6.addEventListener("mouseout", function () {
    alert("Saiu com o mouse")
});



// 2- Evento de Teclado:
console.log("EVENTO DE TECLADO:");

// 2.1- keydown:
var tecla1 = document.querySelector("#tecla1");
tecla1.addEventListener("keydown", function (event) {
    alert(`Tecla pressionada: ${event.key}`)
});

// 2.2- keyup:
var tecla2 = document.querySelector("#tecla2");
tecla2.addEventListener("keyup", function (event) {
    alert(`Tecla solta: ${event.key}`)
});

// 2.3- keypress:
var tecla3 = document.querySelector("#tecla3");
tecla3.addEventListener("keypress", function (event) {
    alert(`Tecla selecionada: ${event.key}`)
});

// 2.4- focus:
var tecla4 = document.querySelector("#tecla4");
tecla4.addEventListener("focus", function () {
    alert(`Recebeu foco`)
});

// 2.5- blur:
var tecla5 = document.querySelector("#tecla5");
tecla5.addEventListener("blur", function () {
    alert(`Perdeu o foco`)
});

// 2.6- change:
var tecla6 = document.querySelector("#tecla6");
tecla6.addEventListener("change", function () {
    alert(`Alterou o valor`)
});



// 3- Carregando do HTML:

// 3.1- DOMContentLoaded:
document.addEventListener('DOMContentLoaded', function() {
    alert('O documento HTML foi completamente carregado e analisado.');
});
  
// 3.2- load:
window.addEventListener('load', function() {
    alert('Todo o conteúdo da página, incluindo imagens e folhas de estilo, foi carregado.');
});

// 3.3- unload:
window.addEventListener('unload', function() {
    alert('Testando unload Todo o conteúdo da página, incluindo imagens e folhas de estilo, foi carregado.');
});

// 3.4- resize:
window.addEventListener('resize', function() {
    alert('Redimensionou a janela');
});