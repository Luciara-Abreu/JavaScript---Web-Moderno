//Dessa forma com uma unica linha
const resultado1 = nota1 => nota1 >=7 ? 'Aprovado' : 'Reprovado';

console.log(resultado1(7.1));
console.log(resultado1(6.8));

console.log('-----------------------');
//Dessa forma com mais de uma linha
const resultado2 = nota2 => {
  return nota2 >=7 ? 'Aprovado' : 'Reprovado';
}

console.log(resultado2(5.1));
console.log(resultado2(7.8));