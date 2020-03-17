"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators
// function logarClasse(constructor: Function) { console.log(constructor) }
function decorador(obj) {
    return function (constructor) {
        console.log(constructor, obj);
    };
}
let Bascica = class Bascica {
    constructor(num = 1) {
        this.num = num;
    }
    incrementa() { this.num += 1; }
};
Bascica = __decorate([
    decorador({ abc: 1 })
], Bascica);
const basica = new Bascica();
basica.incrementa();
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error("Sem permissão");
            }
            else {
                console.log(`Bem vindo(a), ${usuarioLogado.nome}`);
            }
        }
    };
}
// Decorador de método
class ContaBancaria {
    constructor(saldo) {
        this._saldo = saldo;
    }
    get saldo() { return this._saldo; }
    movimentacao(val) { this._saldo += val; }
    sacar(valor) {
        if (valor < this._saldo) {
            this.movimentacao(-valor);
        }
    }
    deposito(valor) { this.movimentacao(valor); }
}
__decorate([
    replace
], ContaBancaria.prototype, "_saldo", void 0);
__decorate([
    congelar
], ContaBancaria.prototype, "sacar", null);
__decorate([
    congelar
], ContaBancaria.prototype, "deposito", null);
const cc = new ContaBancaria(1000);
cc.sacar(250);
console.log(cc.saldo);
cc.deposito(1000);
// Inválido por causa do decorator 'congelar'
// cc.sacar = (valor: number) => { cc.movimentacao(-(valor + 300)) } 
console.log(cc.saldo);
function congelar(alvo, nomePropriedade, descritor) {
    console.log(alvo, nomePropriedade);
    descritor.writable = false;
}
function replace(alvo, propriedade) {
    delete alvo[propriedade];
    Object.defineProperty(alvo, propriedade, {
        get: function () { return alvo[`_${propriedade}`]; },
        set: function (valor) {
            if (valor < 0) {
                throw new Error("Não pode ser nagativo");
            }
            else {
                alvo[`_${propriedade}`] = valor;
            }
        }
    });
}
