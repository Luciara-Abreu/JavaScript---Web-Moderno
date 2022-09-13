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
const apenasId = meses => meses.id 
const apenasName = value => value.name

const result = meses.map(apenasId).map(apenasName)

const consultaMeses =(id) => {
  if(id == apenasId){
    return result
  }
}
console.log("O mês é = >",consultaMeses(11))

console.log("------------------------------------------------");
const consultaMeses1 =(id) => {
  if(id == apenasId){
    console.log(meses.filter(apenasName))
  }else{
    'opz!'
  }
}
console.log("O mês é = >",consultaMeses1(12))

console.log("------------------------------------------------");
const apenasName2 = value => value.name

const consutlaMes2 = (id) => {
  const apenasId2 = mes => mes.id == id
  if(id == apenasId2){
    return resultado
  }
}
const resultado = meses.filter(apenasName2)
console.log("O mês é = >",consutlaMes2(09))
