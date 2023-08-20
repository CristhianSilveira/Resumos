// 1- Objetos de Data:
console.log("OBJETOS DE DATA:");

// 1.1- new date():
console.log("new date():");
console.log(new Date());

// 1.2- New date(string de data):
console.log("String de data:");
const d = new Date("2023-08-11");
console.log(d);

// 1.2- New date(ano, mês, dia, hora, minuto, segundo, milissegundo):
console.log("Ano, Mês...:");
const da = new Date(2023, 7, 11, 17, 33, 30, 0);
console.log(da);

// 1.3- Formato legível de data:
console.log("Data Legível:");
console.log(da.toDateString());


// 2- Formatos de Data:
console.log("FORMATO DE DATAS:");

// 2.1- Data ISO (ANO- MÊS- Dia) -> (AAAA -MM- DD):
console.log("Data ISO:");
const dataIso = new Date("2023-08-11");
console.log(dataIso);

// 2.2- Data Curta (MÊS- DIA- ANO) -> (MM/ DD/ AAAAA):
console.log("Data Curta:");
const dataCurta = new Date("08/11/2023");
console.log(dataCurta);

// 2.3- Data Longa (MÊS- DIA- ANO) ->(MMM/ DD/ YYYY):
console.log("Data Longa:");
const dataLonga = new Date("August 11 2023");
console.log(dataLonga);

// 2.4- Data.parse():
console.log("Data.parse():");
const dat = Date.parse("August 11, 2023");
console.log(dat);


// 3- Métodos de obter data:
console.log("MÉTODOS DE OBTER DATA:");
const data = new Date();

// 3.1- getFullYear():
console.log("getFullYear():");
console.log(data.getFullYear());

// 3.2- getMonth():
console.log("getMonth():");
const messes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
console.log(data.getMonth() + 1);
console.log(messes[data.getMonth()]);

// 3.3- getDate():
console.log("getDate():");
console.log(data.getDate());

// 3.4- getDay():
console.log("getDay():");
const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
console.log(data.getDay());
console.log(dias[data.getDay()]);

// 3.5- getHours():
console.log("getHours():");
console.log(data.getHours());

// 3.6- getMinutes():
console.log("getMinutes():");
console.log(data.getMinutes());

// 3.7- getSeconds():
console.log("getSeconds():");
console.log(data.getSeconds());

// 3.8- getMilliseconds():
console.log("getMilliseconds():");
console.log(data.getMilliseconds());

// 4- Métodos de Definir data:
console.log("MÉTODOS DE DEFINIR DATA:");

// 4.1- setFullYear():
console.log("setFullYear():");
const completo = new Date();
completo.setFullYear(2023, 7, 15);
console.log(completo);

// 4.2- setMonth():
console.log("setMonth():");
const mes = new Date();
mes.setMonth(7);
console.log(mes);

// 4.3- setDate():
console.log("setDate():");
const date = new Date();
date.setDate(15);
console.log(date);

// 4.4- setHours():
console.log("setHours():");
const hora = new Date();
hora.setHours(20);
console.log(hora);

// 4.5- setMinutes():
console.log("setMinutes():");
const minuto = new Date();
minuto.setMinutes(47);
console.log(minuto);

// 4.6- setSeconds():
console.log("setSeconds():");
const segundos = new Date();
segundos.setSeconds(30);
console.log(segundos);