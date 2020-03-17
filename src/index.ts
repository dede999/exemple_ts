const head = document.getElementsByTagName("h1")[0]
head.innerHTML = 'You\'re learning the blues'

let add = function (n1: number, n2 :number): number {
  return n1 + n2
}

enum Frutas {
  Banana, Abacate, Uva
}

function ola (): void {
  console.log('Olá!! Eu sou Goku')
}

let calculo: (num1: number, num2: number) => number
calculo = add
console.log(calculo(1, 16))
// calculo = ola

type Funcionario = {
  nome: string,
  supervisores: string[],
  ponto: (horas: number) => string
}

//objects
let funcionario: Funcionario = {
  nome: 'Tom',
  supervisores: ['Jerry'],
  ponto: (horas: number) => { 
    return horas <= 8 ? 'Ponto Comum': 'Fora do Horário'
   }
}

type ContaCorrente = {
  saldo: number, 
  depositar: (valor: number) => void
}

type Correntista = {
  nome: string,
  conta: ContaCorrente,
  contatos: string[]
}

let aninha: Correntista = {
  nome: 'Ana Silva',
  conta: { saldo: 3456, depositar: function(valor: number) {
    this.saldo += valor
  }},
  contatos: ['34567890', '98765432']
 }

 aninha.conta.depositar(5000)
 console.log(aninha)

// let/const -- escopo de bloco, função e global
// var -- escopo de função e global

// this função arrow -- não varia e determinado pelo valor de 'this' na linha anterior
// this função normal -- pode variar 

const nn = [1, 43, 72, 27, 19]
console.log(Math.max(...nn)) // operador spread

// Exercicio 1
const dobro = (valor: number): number => valor * 2
console.log(dobro(21))

// Exercicio 2
const dizerOla = function (nome: string = "Pessoa") {
  console.log(`Olá, ${nome}`)
}

dizerOla()
dizerOla("Anna")

// Exercicio 3
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// Exercicio 4
const array = [55, 20]
console.log(...array, ... nums)

// Exercicio 5
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

// Exercicio 6
const cientista = {primeiroNome: "Will", experiencia: 12}
const { primeiroNome, experiencia } = cientista
console.log(primeiroNome, experiencia)