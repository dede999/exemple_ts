import { Calendario } from './Calendario';

// Generics são interessantes de se utilizar com classes abstratas
abstract class OperacaoBinaria<T, R> {
  constructor(public op1: T, public op2: T) {}

  abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar() { return this.op1 + this.op2 }
}

console.log(new SomaBinaria(3, 7).executar())

class DiferencaEntreDatas 
  extends OperacaoBinaria<Calendario, string> {
  
    private pegaTempo(date: Calendario): number {
      let { dia, mes, ano } = date
      return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar() {
      const t1 = this.pegaTempo(this.op1)
      const t2 = this.pegaTempo(this.op2)
      const diff = Math.abs(t1 - t2)
      return `${diff/(1000 * 60 * 60 * 24)} dias`
    }
}

console.log(new DiferencaEntreDatas(
  new Calendario(9, 7, 1953), 
  new Calendario(17,6,1992)).executar())

abstract class Fila<T extends string | number> {
  protected _fila: T[] = []

  abstract entrar(elemento: T): void // no fim
  abstract proximo(): T // tira do inicio
  abstract imprime(): T[]
  pilha_vazia() { 
    return this._fila.length === 0 ? true : false
  }
}

class FilaDeNumeros extends Fila<number> {
  entrar(elem: number) {
    this._fila.push(elem)
  }

  proximo() {
    return this._fila.splice(0, 1)[0]
  }

  imprime() { return this._fila }
}

const fila = new FilaDeNumeros
console.log(fila.imprime())  // []
fila.entrar(1)
fila.entrar(2)
fila.entrar(4)
fila.entrar(8)
console.log(fila.imprime())  // [1, 2, 4, 8]
console.log(fila.proximo())  // 1
console.log(fila.proximo())  // 2
console.log(fila.imprime())  // [4, 8]

// desafio generic
interface Pair<C, V> {
  chave: C
  valor: V
}

class Mapa<C, V> {
  private _map: Pair<C, V>[] = []

  encontra(index: C): number {
    return this._map.findIndex(pair => pair.chave === index) 
  }

  obter(index: C): void {
    console.log(this._map[this.encontra(index)])
  }

  colocar(par: Pair<C, V>): void {
    let index = this.encontra(par.chave)
    if(index >= 0) {
      this._map[index] = par
    } else { this._map = [...this._map, par] }
  }

  limpar(): void { this._map = [] }

  imprimir(): void { console.log(this._map) }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.obter(2)
mapa.imprimir()

mapa.colocar({ chave: 1, valor: 'Gustavo' })
mapa.imprimir()
mapa.limpar()
mapa.imprimir()
