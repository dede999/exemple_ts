class Produto {
  constructor(public nome: string,
    public preco: number,
    public desconto: number = 0) {}

  mostrar(): string {
    if(this.desconto > 0) {
      return `${this.nome}
        De R$${this.preco}
        Por R$${this.preco * (1- this.desconto)}`
    }
    else { return `${this.nome}
        Por R$${this.preco}` }
  }
}

console.log(new Produto('Raquete', 1000, .15).mostrar())
console.log(new Produto('Kit Bolas', 20).mostrar())

// public - totalmente visivel
// private - visivel só na própria classe
// protected - visivel só na própria classe e nas 'filhas'

// 'static' - atributos e métodos 'servem' à Classe, e não mais a instância

// classes abstratas n podem ser instanciadas
// métodos abstratos não têm corpo
// dentro de classes abstratas podem haver métodos de ambos tipos
// classes normais que herdem de abstratas devem implementar os métodos abstratos que as classes pais possuam
// se uma classe abstrata herdar de outra, não é necessário

// Singleton -- quando uma instancia é suficiente
class Only {
  private static unico: Only = new Only
  private constructor() {}

  static pega_unico(): Only {
    return Only.unico
  }

  imprime(): void {
    console.log("self")
  }
}

Only.pega_unico().imprime()

class Moto {
  public velocidade: number = 0
  
  constructor(public marca: string) {}

  buzinar(): void {
    console.log('Toooooooooot!')
  }

  acelerar(delta: number): void {
    this.velocidade += delta
  }
}

var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

abstract class Objeto2D {
  constructor(public base: number = 0,
    public altura: number = 0) {}

  abstract area(): number
}

class Retangulo extends Objeto2D {
  area(): number { return this.base * this.altura }
}

console.log(new Retangulo(5, 7).area())

class Estagiario {
  constructor(private _primeiroNome: string) {}

  get primeiroNome(): string {
    return this._primeiroNome
  }

  set primeiroNome(nome: string) {
    if (nome.length >= 1 && nome !== this._primeiroNome) {
      this._primeiroNome = nome
    }
  }
}

let estagiario = new Estagiario('Carlito')
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)