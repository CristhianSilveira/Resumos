// 1- Tamanho da janela:
console.log("TAMANHO DA JANELA:")
console.log("Largura da janela do navegador: " + window.innerWidth + "px");
console.log("Altura da janela do navegador: " + window.innerHeight + "px");

// window.close();
// const novaJanela = window.open('https://www.google.com', '_blank', 'width=500,height=300');
// window.moveTo(100, 100); //posição x, y
// window.resizeTo(800, 600); // largura, altura



// 2- Janela do usuário:

// 2.1- Largura:
console.log("Largura do usuário:");
console.log("A largura da sua tela é:" + screen.width)

// 2.2- Altura:
console.log("Altura do usuário:");
console.log("A Altura da sua tela é:" + screen.height)

// 2.3- Largura disponível:
console.log("Largura disponível do usuário:");
console.log("A Largura disponível da sua tela é:" + screen.availWidth)

// 2.4- Altura disponível:
console.log("Altura disponível do usuário:");
console.log("A Altura disponível da sua tela é:" + screen.availHeight)



// 3- Histórico da janela:

// 3.1- Voltar no histórico:
function goBack() {
    window.history.back()
}

// 3.2- Avançar no histórico:
function goForward() {
    window.history.forward()
}



// 4- Caixas pop-up:
console.log("Caixas pop-up:");

// 4.1- Caixa de alerta:
console.log("Caixa de alerta:");
alert("Eu sou uma caixa de alerta!");

// 4.2- Caixa de Confirmação:
console.log("Caixa de confirmação:");
function myFunction() {
    if (confirm("Pressione um botão!")) {
        console.log("Você apertou OK!");
    } else {
        console.log("Você apertou Cancelar!");
    }
}
myFunction();

// 4.3- Caixa de Aviso:
console.log("Caixa de aviso:")
let pessoa = prompt("Por favor entre com seu nome", "Harry Potter");
if (pessoa == null || pessoa == "") {
  console.log("O Usuário cancelou o aviso.");
} else {
  console.log("Olá " + pessoa + "! Como você está hoje?");
}