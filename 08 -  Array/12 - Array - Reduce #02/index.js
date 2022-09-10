console.log("------------------------------------------------");
console.log("Array - Reduce #02 - Desafio");

/**
 * Desafio1: Todos os alunos são bolsistas?
 * Desafio2: Algum aluno é bolsista?
 */

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Anna", nota: 9.2, bolsista: true },
  { nome: "Lucas", nota: 9.8, bolsista: true },
  { nome: "Luci", nota: 8.7, bolsista: false },
];
console.log("------------------------------------------------");
const bolsistas = (resultado, bolsista) => resultado && bolsista
const resultAlunos = alunos.map(a => a.bolsista).reduce(bolsistas)
console.log('Todos os alunos são bolsistas?',resultAlunos);

console.log("------------------------------------------------");
const nãoBolsistas = (resultado, bolsista) => resultado || bolsista
const naoBolsistas = alunos.map(a => a.bolsista).reduce(nãoBolsistas)
console.log('Algum aluno é bolsista?',naoBolsistas);
