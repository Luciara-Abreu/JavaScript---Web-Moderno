/**
 * 12) Faça um algoritmo que calcule o fatorial de um número.
 */

function calcFatorial(num) {
  let x = 1;
  console.log(`O numero digitado para o fatorial é = ${num}`);
  if (Number.isInteger(num) == true) {
    while (num > 1) {
      x = x * num;
      console.log(num--, "x", num, "=", x);
    }
  } else {
    alert("Favor digitar um numero inteiro");
    return 0;
  }
}
calcFatorial(5);
