// Decorators
// function logarClasse(constructor: Function) { console.log(constructor) }
function decorador(obj: Object) {
  return function(constructor: Function) {
    console.log(constructor, obj)
  }
}

@decorador({abc: 1})
class Bascica {
  constructor(public num: number = 1) {}
  incrementa() { this.num += 1 }
}

const basica = new Bascica()
basica.incrementa()
// ---------------------------------------------
type Constructor = new (...arg: any[]) => {}

// Desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: true
}

@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log('Algo crítico foi alterado!')
  }
}

new MudancaAdministrativa().critico()

function perfilAdmin<T extends Constructor>(constructor: T) {
  return class extends constructor{
    constructor(...args: any[]) { 
      super(...args)
      if(!usuarioLogado || !usuarioLogado.admin) {
        throw new Error("Sem permissão");
        
      } else { console.log(`Bem vindo(a), ${usuarioLogado.nome}`) }
    }
  }
}

// Decorador de método

class ContaBancaria {
  @replace
  private _saldo: number

  constructor(saldo: number) {
    this._saldo = saldo
  }

  get saldo(): number { return this._saldo }

  movimentacao(val: number): void { this._saldo += val }

  @congelar
  sacar(valor: number): void {
    if (valor < this._saldo) {
      this.movimentacao(-valor)
    }
  }

  @congelar
  deposito(valor: number): void { this.movimentacao(valor) }
}

const cc = new ContaBancaria(1000)
cc.sacar(250)
console.log(cc.saldo)
cc.deposito(1000)
// Inválido por causa do decorator 'congelar'
// cc.sacar = (valor: number) => { cc.movimentacao(-(valor + 300)) } 
console.log(cc.saldo)

function congelar(alvo: any, nomePropriedade: string, 
  descritor: PropertyDescriptor) {
    console.log(alvo, nomePropriedade)
    descritor.writable = false
}

function replace(alvo: any, propriedade: string) {
  delete alvo[propriedade]
  Object.defineProperty(alvo, propriedade, {
    get: function(): any { return alvo[`_${propriedade}`] },

    set: function(valor: any): void {
      if (valor < 0) { throw new Error("Não pode ser nagativo")}
      else {
        alvo[`_${propriedade}`] = valor
      }
    }
  }) 
}