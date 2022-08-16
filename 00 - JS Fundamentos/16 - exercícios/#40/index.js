/*
40) Faça uma função que receba como parâmetro um vetor de notas e mostre os 
conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito 
D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.
 */
// const conceito = (notas) => {
//   if (notas > 0 && notas <= 4.9) {
//     console.log("Nota = ", notas, " Conceito D");
//   } else if (notas > 4.9 && notas < 6.9) {
//     console.log("Nota = ", notas, " Conceito C");
//   } else if (notas > 6.9 && notas < 8.9) {
//     console.log("Nota = ", notas, " Conceito B");
//   } else if (notas > 8.9 && notas <= 10.0) {
//     console.log("Nota = ", notas, " Conceito A");
//   } else {
//     console.log("Nota = ", notas, " nota invalida");
//   }
// };
// conceito(3.2);
// conceito(5.7);
// conceito(6.8);
// conceito(7.7);
// conceito(8.2);
// conceito(9.0);
// conceito(10);
// conceito(10.2);

//forma que o profe fez

function conceituarNotas(notas) {
  let conceitos = [];
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 0 && notas[i] <= 4.9) {
      conceitos.push("D");
    } else if (notas[i] >= 5 && notas[i] <= 6.9) {
      conceitos.push("C");
    } else if (notas[i] >= 7 && notas[i] <= 8.9) {
      conceitos.push("B");
    } else if (notas[i] >= 9 && notas[i] <= 10) {
      conceitos.push("A");
    } else {
      conceitos.push("Nota inválida");
    }
  }
  return conceitos;
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8];
let vetorConceitos = conceituarNotas(notas);

console.log(vetorConceitos);
