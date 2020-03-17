"use strict";
const head = document.getElementsByTagName("h1")[0];
head.innerHTML = 'You\'re learning the blues';
let add = function (n1, n2) {
    return n1 + n2;
};
var Frutas;
(function (Frutas) {
    Frutas[Frutas["Banana"] = 0] = "Banana";
    Frutas[Frutas["Abacate"] = 1] = "Abacate";
    Frutas[Frutas["Uva"] = 2] = "Uva";
})(Frutas || (Frutas = {}));
function ola() {
    console.log('Olá!! Eu sou Goku');
}
let calculo;
calculo = add;
console.log(calculo(1, 16));
//objects
let funcionario = {
    nome: 'Tom',
    supervisores: ['Jerry'],
    ponto: (horas) => {
        return horas <= 8 ? 'Ponto Comum' : 'Fora do Horário';
    }
};
let aninha = {
    nome: 'Ana Silva',
    conta: { saldo: 3456, depositar: function (valor) {
            this.saldo += valor;
        } },
    contatos: ['34567890', '98765432']
};
aninha.conta.depositar(5000);
console.log(aninha);
// let/const -- escopo de bloco, função e global
// var -- escopo de função e global
// this função arrow -- não varia e determinado pelo valor de 'this' na linha anterior
// this função normal -- pode variar 
const nn = [1, 43, 72, 27, 19];
console.log(Math.max(...nn)); // operador spread
// Exercicio 1
const dobro = (valor) => valor * 2;
console.log(dobro(21));
// Exercicio 2
const dizerOla = function (nome = "Pessoa") {
    console.log(`Olá, ${nome}`);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Exercicio 4
const array = [55, 20];
console.log(...array, ...nums);
// Exercicio 5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
// Exercicio 6
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
