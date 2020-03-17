"use strict";
const me = {
    nome: "Andre",
    tipoRH: "O+",
    saudar() { console.log(`Olá, eu sou ${this.nome}`); },
    a_funcao() { console.log("A função"); }
};
console.log(me);
// Ao implementar uma classe que extenda uma interface,
// é importante que tudo o que não for opcional, esteja ali.
class Cliente {
    constructor(nome) {
        this.nome = nome;
        this._idade = 28;
    }
    saudar() { console.log(`Oi, chamo-me ${this.nome}`); }
    diz_idade() { return this._idade; }
}
const cliente = new Cliente('Andre');
console.log(cliente.saudar());
let produtorio; // agora qualquer função que eu atribua à variável deve seguir a assinatura definida
produtorio = (...nums) => {
    return nums.reduce(((t, val) => t * val), 1);
};
console.log(produtorio(1, 2, 4, 5, 7, 9));
produtorio = (min, max) => {
    let result, index;
    result = min;
    index = min + 1;
    while (index <= max) {
        result *= index;
        index++;
    }
    return result;
};
console.log(produtorio(3, 5));
// produtorio = (msg: string) => { return msg }  // Dá erro
// extends -- interface/interface + classe/classe
// implement -- interface/classe
// quando classes abstratas implementam interfaces,
// a assinatura do método n é suficiente
