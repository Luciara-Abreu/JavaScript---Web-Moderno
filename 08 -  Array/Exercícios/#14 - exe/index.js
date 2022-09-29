console.log("------------------------------------------------");
/*14)
 * Desenvolva uma função que receba um ano e mostre se ele é bissexto.
 * Ano bissexto deve ser multiplo de 4 ou
 * Ano bissexto dever ser multiplo de 100 e de 400
 */
console.log("------------------------------------------------");
console.log("");

const anoBissexto = (ano) => {
  const anoPor4 = ano % 4 == 0 && ano % 100 !== 0;
  //const anoPor100 = ano % 100 == 0
  const anoPor400 = ano % 400 == 0;
  return anoPor4 || anoPor400;
};
console.log(anoBissexto(2100));

console.log("------------------------------------------------");
console.log("");

const anoBissexto2 = (ano) => {
  if (ano % 4 == 0 && ano % 100 !== 0) {
    return `Ano ${ano} é Bissexto`;
  } else if (ano % 400 == 0) {
    return `Ano ${ano} é Bissexto`;
  } else {
    return `Este ano ${ano} não é Bissexto`;
  }
};
console.log(anoBissexto2(2100));
