// MÉTODOS STRING


// 1- Concatenação ->
console.log("CONCATENAÇÃO:");

// 1.1- (+)
const minhaString = "Olá,"
const concatena = minhaString + " Como você está?";
console.log(concatena);

// 1.2- Concat();
console.log("Concat():");
const concatenaString = "Mundo!";
console.log("Olá".concat(", ", concatenaString));


// 2- Interpolação -> `${}`
console.log("INTERPOLAÇÃO:");
const minhaString2 = "Olá João,"
const interpola = `${minhaString2} Como você está?`;
console.log(interpola);


// 3- Comprimento de String -> length
console.log("COMPRIMENTO DA STRING:");
let texto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(texto.length);


// 4- Extrair parte da string:
console.log("EXTRAIR STRING:");
const frutas = "Banana, Maçã, Laranja, Kiwi"

// 4.1- Slice(posição Inicial, posição final):
console.log("Splice:");
console.log(frutas.slice(8, 12));


// 4.2- Substring(posição Inicial, posição final):
console.log("Substring:");
console.log(frutas.substring(0, 6));

// 4.3- Substr(posição Inicial, comprimento):
console.log("Substr:");
console.log(frutas.substr(14, 7));


// 5- Substituir String:
console.log("SUBSTITUIR STRING:");
const texto2 = "Eu amo gatos. Os gatos são muitos fáceis de amar.";

// 5.1- Replace("valor inicial", "valor final"):
console.log("Replace:");
console.log(texto2.replace("gatos", "cachorros"));

// 5.1- ReplaceAll("valor inicial","valor final"):
console.log("ReplaceALL:");
console.log(texto2.replaceAll("gatos", "cachorros"));


// 6- Convertendo para Maiúsculas e Minúsculas:
console.log("CONVERTER MAIUSCULA E MINUSCULA:");
const texto3 = "Olá, Mundo!";

// 6.1- Maiúscula -> toUpperCase();
console.log("toUpperCase():");
console.log(texto3.toUpperCase());

// 6.2- Minúscula -> toLowerCase();
console.log("toLowerCase():");
console.log(texto3.toLowerCase());


// 7- Remover espaços na String:
console.log("REMOVER ESPAÇOS NA STRING:");
let texto4 = "      Hello World!      ";
console.log(texto4)

// 7.1- trim():
console.log("trim():");
console.log(texto4.trim());

// 7.2- trimStart():
console.log("trimStart():");
console.log(texto4.trimStart());

// 7.3- trimEnd():
console.log("trimEnd():");
console.log(texto4.trimEnd());


// 8- Extraindo caracteres de string:
console.log("EXTRAINDO PARTES DA STRING:");
let texto5 = "O rato roeu a roupa";

// 8.1- charAT(posição)
console.log("charAt():");
console.log(texto5.charAt(0));
console.log(texto5.charAt(2));
console.log(texto5.charAt(3));
console.log(texto5.charAt(4));
console.log(texto5.charAt(5));

// 8.2- charAT(posição)
console.log("charAt():");
console.log(texto5.charCodeAt(0));


// 9- Pesquisa de String:
console.log("PESQUISA DE STRING:");
let texto6 = "O rato roeu a roupa do rei de Roma, logo o rato morreu";

// 9.1- indexOf("valor"):
console.log("indexOf():");
console.log(texto6.indexOf("rato"));

// 9.2- lastIndexOf("valor"):
console.log("lastIndexOf():");
console.log(texto6.lastIndexOf("rato"));

// 9.3- search("valor"):
console.log("search():");
console.log(texto6.search("rato"));

// 9.4- Includes():
console.log("includes():");
console.log(texto6.includes("roeu"));

// 9.5- startsWith():
console.log("startsWith():");
console.log(texto6.startsWith("O"));

// 9.6- endsWith():
console.log("includes():");
console.log(texto6.endsWith("eu"));


// 10- Modelos de String:
console.log("MODELOS DE STRING:");

// 10.1- Back-Tics: (``)
console.log("Back-Tics:");
let texto7 = `Bom dia!`;
console.log(texto7);

// 10.2- Aspas Dentro de Strings:
console.log("Aspas Dentro de Strings:");
let texto8 = `Ele costuma ser chamado de "Johnny"`
console.log(texto8);

// 10.3- Substituições de variáveis:
console.log("Substituições de variáveis:");
let Nome = "João"; 
let Sobrenome = "Gomes"; 
let texto9 = `Bem-Vindo ${Nome} ${Sobrenome}!`;
console.log(texto9);
