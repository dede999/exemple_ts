"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calendario {
    constructor(d = 1, m = 1, a = 1970) {
        this.dia = d;
        this.mes = m;
        this.ano = a;
    }
}
exports.Calendario = Calendario;
console.log(new Calendario(17, 6, 1992));
console.log(new Calendario(17));
