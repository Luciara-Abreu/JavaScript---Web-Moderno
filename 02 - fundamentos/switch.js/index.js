const imprimeResults = function (nota){
  switch(Math.floor(nota)) {
    case 10:
      case 9: 
      console.log('Quadro de Honra')
      break
    case 8: case 7: 
      console.log('Aprovado')
      break
    case 6: case 5: case 4:
      console.log('Recuperação')
      break
    case 3: case 2: case 1: case 0:
      console.log('Reprovado')
      break
    default:
      console.log('Nota invalida')
  }
  console.log('fim')
}

imprimeResults(10)
imprimeResults(8.9)
imprimeResults(7.5)
imprimeResults(6)
imprimeResults(5.6)
imprimeResults(5)
imprimeResults(4)

