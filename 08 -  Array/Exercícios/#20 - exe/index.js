console.log("------------------------------------------------");
/*20) Criar uma função que receba um número de 1 a 10.Internamente,na função, 
será gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro 
de entrada foi igual ao número sorteado internamente.Se o valor fornecido foi o 
sorteado,retorne"Parabéns!O número sorteado foi o X".Se não for igual, retorne
"Que pena!O número sorteado foi o X".X é o número que foi sorteado
 */
console.log("------------------------------------------------");
console.log("");

const funcaoDaSorte = (numero) => {
  const min = 1
  const max = 10
  const numeroAleatório = Math.floor(Math.random() * (max - min + 1) + min)

  return (numero === numeroAleatório ?
    `Parabéns! O número sorteado foi o ${numeroAleatório}` :
    `Que pena, o número sorteado foi o ${numeroAleatório}` 
    )
}
console.log(funcaoDaSorte(5))