/* 
parameter and return are optional 
*/

console.log("-----/ em determinado momento ela retorna o valor  /-----");
function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`);
  } else {
    return area
  }
}

console.log(area(10,5));
console.log(area(1,3));
console.log(area(2,5));
console.log(area(10));
console.log(area(5,5));