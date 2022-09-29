console.log("------------------------------------------------");
/*18) Criar uma função que receba a base e a altura de um triangulo
e retorne a área desse triangulo.
A precisão deverá ser de duas casas decimais, arredondando se 
necessário.
formula para calcular a área de um triangulo é
(base X altura)/2
 */
console.log("------------------------------------------------");
console.log("");

const areaDoTriangulo = (base, altura) => {
  let area = (base * altura) / 2;
  return area.toFixed(2)
};

console.log(areaDoTriangulo(7, 9));
