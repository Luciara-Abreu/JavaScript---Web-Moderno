const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];
console.log("-----/ * sem callback * /-----");

const notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) notasBaixas1.push(notas[i]);
}
console.log(notasBaixas1);

console.log("-----/ * com callback * /-----");
const notasBaixas2 = notas.filter(function (notas) {
  return notas < 7;
});
console.log(notasBaixas2);

console.log("-----/ * com callback + arrow * /-----");

const notasBaixas3 = notas.filter((notas) => notas < 7);
console.log(notasBaixas3);

console.log("-----/ * colocando a função callback em uma variável * /-----");
const notasMenorQue7 = (notas) => notas < 7;

const notasBaixas4 = notas.filter(notasMenorQue7);
console.log(notasBaixas4);
