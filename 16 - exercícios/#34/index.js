/*
34) Construa uma função que receberá duas Strings de tamanhos variados e que 
retornará True ou False caso todos os caracteres (independentemente de ser 
maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

// Exercicio copaido
const validarStrings = (palavra1, palavra2) => {
  let estaContido = true;
  for (let i = 0; i < palavra1.length; i++) {
    let caracter1 = palavra1.charAt(i).toLowerCase();
    for (let j = 0; j < palavra2.length; j++) {
      let caracter2 = palavra2.charAt(j).toLowerCase();
      if (caracter1 == caracter2) {
        estaContido = true;
        break;
      } else {
        estaContido = false;
      }
    }
    if (!estaContido) {
      return estaContido;
    }
  }
  for (let i = 0; i < palavra2.length; i++) {
    let caracter2 = palavra2.charAt(i).toLowerCase()
    for (let j = 0; j < palavra2.length; j++) {
      let caracter1 = palavra1.charAt(j).toLowerCase()
      if (caracter1 == caracter2) {
        estaContido = true
        break;
      } else {
        estaContido = false
      }
    }
    if (!estaContido) {
      return estaContido
    }
  }
  return estaContido
}

console.log(validarStrings("abcdf", "dcba"))
