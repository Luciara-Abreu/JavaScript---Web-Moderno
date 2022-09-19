console.log("------------------------------------------------");
/*5) Crie uma função que receba dois numeros e retorne se o
 * primeiro é maior ou igual ao segundo.
 */
console.log("------------------------------------------------");

const qualMaior = (nu1, nu2) => {
  if (nu1 > nu2) {
    return "primeiro";
  } else if (nu1 < nu2) {
    return "segundo";
  } else {
    return "iguais";
  }
};
const maiorOuMenor = qualMaior(10, 10);
console.log("O maior é o ==> ", maiorOuMenor);