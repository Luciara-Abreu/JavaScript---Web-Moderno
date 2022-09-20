console.log("------------------------------------------------");
/*6) Crie uma função que receba um valor boleano ou numerico
 *Se o parametro fornecido for bolleano o retorno da função deverá
 * ser o inverso. Ex. Se a entrada for falsa vai retornar true.
 */
console.log("------------------------------------------------");

const invertido = (qualquerValor) => {
  const tipo = typeof qualquerValor;
  if (qualquerValor == Boolean(qualquerValor)) {
    return !qualquerValor;
  } else if (qualquerValor == Number(qualquerValor)) {
    return -qualquerValor;
  } else {
    return `não numérico =>  ${qualquerValor}`;
  }
};

const valor = invertido("-250");
console.log("O valor é ==> ", valor);
