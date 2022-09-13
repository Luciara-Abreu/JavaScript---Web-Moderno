console.log("------------------------------------------------");
/*3) Crie uma função que receba dois paramentro um é a quantidade de horas 
trabalhadas no mês e o quanto ele recebe por hora. O retorno da função
deve ser a String "Salário igual a R$ X em que X é o quanto o funcionário 
ganhou no mês"
*
*/

const qtHoras = 0;
const qtValorHora = 0;
const nome = "";

const calcaularValorHora = (horas, valor, nome) => {
  valorHora = horas * valor;
  valorBruto = valorHora - (valorHora * 30) / 100;
  console.log(
    `O funcionário(a) ${nome}, recebe ${valorBruto} por horas trabalhadas`
  );
};

calcaularValorHora(180, 60, "Luci");
