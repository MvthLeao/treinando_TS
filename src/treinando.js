"use strict";
function multiplicacao(n1, n2) {
    const resultado = n1 * n2;
    return `O resultado entre ${n1}x${n2} é: ${resultado}.`;
}
function boasVindas(nome) {
    return `Olá ${nome}! Seja bem-vindo(a), é um prazer te receber por aqui.`;
}
const msg = multiplicacao(8, 12);
const ola = boasVindas('Matheus');
console.log(msg);
console.log(ola);
