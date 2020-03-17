"use strict";
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    mostrar() {
        if (this.desconto > 0) {
            return `${this.nome}
        De R$${this.preco}
        Por R$${this.preco * (1 - this.desconto)}`;
        }
        else {
            return `${this.nome}
        Por R$${this.preco}`;
        }
    }
}
console.log(new Produto('Raquete', 1000, .15).mostrar());
console.log(new Produto('Kit Bolas', 20).mostrar());
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
    constructor() {
    }
    static pega_unico() {
        return Only.unico;
    }
    imprime() {
        console.log("self");
    }
}
Only.unico = new Only;
Only.pega_unico().imprime();
class Moto {
    constructor(marca) {
        this.marca = marca;
        this.velocidade = 0;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        this.velocidade += delta;
    }
}
var moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() { return this.base * this.altura; }
}
console.log(new Retangulo(5, 7).area());
class Estagiario {
    constructor(_primeiroNome) {
        this._primeiroNome = _primeiroNome;
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(nome) {
        if (nome.length >= 1 && nome !== this._primeiroNome) {
            this._primeiroNome = nome;
        }
    }
}
let estagiario = new Estagiario('Carlito');
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
