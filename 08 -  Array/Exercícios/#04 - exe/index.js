console.log("------------------------------------------------");
/*4) Crie uma função que receba um numero de (1 a 12) e retorne
 * o mês correspondente.
 */

const meses = [
  {
    id: 01,
    name: "Janeiro",
  },
  {
    id: 02,
    name: "Fevereiro",
  },
  {
    id: 03,
    name: "Março",
  },
  {
    id: 04,
    name: "Abril",
  },
  {
    id: 05,
    name: "Maio",
  },
  {
    id: 06,
    name: "Junho",
  },
  {
    id: 07,
    name: "Julho",
  },
  {
    id: 08,
    name: "Agosto",
  },
  {
    id: 09,
    name: "Setembro",
  },
  {
    id: 10,
    name: "Outubro",
  },
  {
    id: 11,
    name: "Novembro",
  },
  {
    id: 12,
    name: "Dezembro",
  },
];
console.log("------------------------------------------------");
const consultaMeses = (id) => {
  const meuMes = (mes) => mes.id === id;
  const result = meses.filter(meuMes);
  return result[0].name;
};
const qualMes = consultaMeses(9);
console.log("Que mês é?", qualMes);

console.log("------------------------------------------------");
