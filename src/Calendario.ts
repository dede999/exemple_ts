export class Calendario {
  dia: number
  mes: number
  ano: number

  constructor(d: number = 1, m: number = 1, a: number = 1970) {
    this.dia = d
    this.mes = m
    this.ano = a
  }

}

console.log(new Calendario(17, 6, 1992))
console.log(new Calendario(17))