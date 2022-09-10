console.log("------------------------------------------------");
console.log("Array - Reduce #01");

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Anna", nota: 9.2, bolsista: true },
  { nome: "Lucas", nota: 9.8, bolsista: true },
  { nome: "Luci", nota: 8.7, bolsista: false },
];

const resultado = alunos
  .map((a) => a.nota)
  .reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
  }, 0);

console.log("------------------------------------------------");
console.log(alunos.map((a) => a.nota));
console.log("------------------------------------------------");
console.log(resultado);
