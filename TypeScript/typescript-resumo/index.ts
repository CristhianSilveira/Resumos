// TIPOS SIMPLES DE VARIÁVEL
console.log("-- TIPOS SIMPLES ---");
    // boolean
    let certo: boolean = true;
    console.log(typeof certo);
    // number
    let num: number = 10;
    console.log(typeof num);
    // string
    let teste = "teste";
    console.log(typeof teste);


// ATRIBUIÇÃO DE VARIÁVEL:
    // Tipo Explícito: Você atribui automaticamente o tipo da variável.
    let nome = "Darlan";

    // Tipo Implícito: O TypeScript irá "adivinhar" o tipo, com base no valor atribuído.
    let nome2 = "Darlan";

    
// TIPOS ESPECIAIS:   
console.log("--- TIPOS ESPECIAIS ---");
    // any: desabilita a verificação de tipo e efetivamente permite que todos os tipos sejam usados.
    console.log("> any:");
    let v: any = 123456;
    v = "testando";
    console.log(typeof v);

    // unknown: semelhante ao any, mas mais segura.
    console.log("> unknown");
    let w: unknown = "teste";
    w = 12345;
    console.log(typeof w);


// ARRAYS(MATRIZES):
console.log("--- ARRAYS ---");
const nomes: string[] = ["Gabriel", "Tomas"];
nomes.push("Carlos");
console.log(nomes);

    // readonly: impede que os arrays sejam alterados
    console.log("> readonly");
    const names: readonly string[] = ["Darlan", "Marcelo", "Alice", "Ana"];
    // names.push("Andre"); Dá erro
    console.log(names);


// TUPLAS:
console.log("--- TUPLAS ---");
let myTupla: [number, boolean, string];
myTupla = [5, false, "Testando tupla"];
//tupla = [false, 5, "Testando tupla"]; Dá erro
console.log(myTupla);

    // readonly: impede que as tuplas sejam alteradas
    console.log("> readonly");
    let myTupla2: readonly [boolean, string, number, number];
    myTupla2 = [true, "Teste", 5, 100];
    // myTupla2.push = ["Teste"]; Dá erro
    console.log(myTupla2);

    // tupla nomeada: fornece tipo aos valores de índice:
    console.log("> Tupla Nomeada");
    const reta: [x: number, y: number] = [55, 41];
    console.log(reta);


// OBJETOS:
console.log("--- OBJETOS ---");
const carro: { tipo: string, modelo: string, ano: number } = {  
    tipo: "Toyota",  modelo: "Corolla",  ano: 2009  
};
console.log(carro);

    // Propriedades opcionais: não precisam ser definidas.
    console.log("> Propriedade Opcional")
    const carro2: { tipo: string, modelo: string, quilometragem?: number, ano: number } = {  
        tipo: "Mercedes",  modelo: "SUV",  ano: 2010  
    };
    console.log(carro2);


// ENUMS -> Um enum é uma "classe" especial que representa um grupo de constantes (variáveis ​​imutáveis)
console.log("--- ENUMS ----");

    // enum numérico:
    console.log("> Enums Numérico");
    enum DirecaoCardinal {
        Norte = 1,
        Leste = 4,
        Sul = 2,
        Oeste = 3
    };
    let DirecaoAtual = DirecaoCardinal.Norte;
    let DirecaoAnterior = DirecaoCardinal.Oeste;
    console.log(DirecaoAtual);
    console.log(DirecaoAnterior);

    // enum string:
    console.log("> Enum String");
    enum Direcao{
        Norte = 'Norte',
        Leste = "Leste",
        Sul = "Sul",
        Oeste = "Oeste"
    };
    console.log(Direcao.Norte);
    console.log(Direcao.Sul);


// ALIASES E INTERFACE

    // ALIASES: Permitem definir tipos com um nome personalizado (um Alias).
    console.log("--- ALIASES ---");
    type CarroAno = number  
    type CarroTipo = string  
    type CarroModelo = string  
    type Carro3 = {  
        ano: CarroAno,  
        tipo: CarroTipo,  
        modelo: CarroModelo  
    }  
    
    const carroAno: CarroAno = 2001  
    const carroTipo: CarroTipo = "Toyota"  
    const carroModelo: CarroModelo = "Corolla"  
    const carro3: Carro3 = {  
        ano: carroAno,  // valor da const carroAno = 2021
        tipo: carroTipo,  // valor da const carroTipo = Toyota
        modelo: carroModelo // valor da const carroModelo = Corolla
    };
    console.log(carro3);

    // Interface: Permitem definir tipos com um nome personalizado, Porém só em objetos.
    console.log("--- INTERFACES ---");
    interface Retangulo {  
        Altura: number,  
        Largura: number  
    }  
    const retangulo: Retangulo = {  
        Altura: 20,  
        Largura: 10  
    };
    console.log(retangulo);
    

// UNION TYPE: ​​quando um valor pode ser mais de um único tipo.
console.log("--- UNION TYPE ---");
function Status(codigo: string | number) {  
    console.log(`Meu código de status é: ${codigo}.`)  
}  
Status(404);  
Status('ERRO: 404');


// FUNÇÕES:
console.log("--- FUNÇÕES ---");
    
    // Tipo de retorno
        console.log("> Tipo de Retorno");
        
        // padrão -> retorna algo
        function getTime(): number {
            return new Date().getTime();
        }
        console.log(getTime())
        
        // sem retorno -> void(indica que a função não tem retorno)
        console.log(">> void")
        function printHello(): void {
            console.log('Hello!');
        }
        printHello();

    // Parâmetros
    console.log("> Parâmetros");
    function multiplica(a: number, b: number) {  
        return a * b;  
    }  
    console.log(multiplica(2, 5));

    // Type Aliases
    console.log("> Aliases");
    type Negativo = (valor: number) => number;
    const negativaFuncao: Negativo = (valor) => valor * -1;
    console.log(negativaFuncao(10));


// CASTING
console.log("--- CASTING ---");
let x: unknown = 'Olá'; 
console.log((x as string).length);


// CLASSES
console.log("--- CLASSES ---");
// Membros de tipo:
console.log("> Membros de tipo");
class Pessoa {  
    nome: string
    idade: number
    sexo: string

    constructor(nome: string, idade:number, sexo: string) {
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }
}  
const pessoa1 = new Pessoa("Jaqueline", 20, "Feminino");
const pessoa2 = new Pessoa("Alberto", 30, "Masculino");  
console.log(pessoa1);
console.log(pessoa2);

    // Herança
    console.log("> Herança");
        // implements
        console.log(">> implements");
        interface Forma {
            area: () => number;
        }

        class Retangulo2 implements Forma{
            largura: number
            altura: number

            area(): number {
                return this.largura * this.altura;
            }

            constructor(largura: number, altura: number) {
                this.largura = largura
                this.altura = altura
            }
        }
        const meuRetangulo = new Retangulo2(10,20);
        console.log(meuRetangulo.area());

        // extends
        console.log(">> extends");
        class Quadrado extends Retangulo2{

            constructor(largura: number) {
                super(largura, largura)
            }
        }
        const meuQuadrado = new Quadrado(20);
        console.log(meuQuadrado.area());


// GENÉRICOS
console.log("--- GENÉRICOS ---");
function Soma<T>(v1: T): T {
    return v1;
}
const soma = Soma<number>(40);
const somaString = Soma<string>('40');
console.log(soma);
console.log(somaString);