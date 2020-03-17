interface TipoDeFuncao<T> {
  (...args: T[]): T
}

interface Humano {
  nome: string // necessário
  idade?: number // opcional
  [prop: string]: any // props diversas
  saudar: () => void // metodo obrigatório
  diz_idade?: () => void // metodo opcional
  // metodos diversos: inutil, já que dá pra colocar qualquer outra função
  // [func: string]: TipoDeFuncao<string>
}

const me: Humano = { // compativel
  nome: "Andre",
  tipoRH: "O+",
  saudar() { console.log(`Olá, eu sou ${this.nome}`) },
  a_funcao () { console.log("A função") }
}
console.log(me)

// Ao implementar uma classe que extenda uma interface,
// é importante que tudo o que não for opcional, esteja ali.
class Cliente implements Humano {
  private readonly _idade = 28
  constructor(public nome: string) {}

  saudar() { console.log(`Oi, chamo-me ${this.nome}`)}

  diz_idade() { return this._idade } 
}
const cliente = new Cliente('Andre')
console.log(cliente.saudar())


let produtorio: TipoDeFuncao<number> // agora qualquer função que eu atribua à variável deve seguir a assinatura definida
produtorio = (...nums: number[]) => { // compativel
  return nums.reduce(((t, val) => t * val), 1)
}
console.log(produtorio(1, 2, 4, 5, 7, 9))
produtorio = (min: number, max: number) => {
  let result, index: number
  result = min
  index = min + 1 
  while (index <= max) { result *= index; index++ }
  return result
}
console.log(produtorio(3, 5))

// produtorio = (msg: string) => { return msg }  // Dá erro

// extends -- interface/interface + classe/classe
// implement -- interface/classe
// quando classes abstratas implementam interfaces,
// a assinatura do método n é suficiente
