function multiplicacao (n1:number, n2:number): string {
    const resultado = n1*n2;
    return `O resultado entre ${n1}x${n2} é: ${resultado}.`;
}

function boasVindas (nome: string): string {
    return `Olá ${nome}! Seja bem-vindo(a), é um prazer te receber por aqui.`
}

const msg: string = multiplicacao(8,12);
const ola: string = boasVindas('Matheus');
console.log(msg);
console.log(ola);