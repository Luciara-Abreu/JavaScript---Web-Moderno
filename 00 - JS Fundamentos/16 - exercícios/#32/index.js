/*
*Construir um algoritmo que calcule a média aritmética dos valores de um vetor 
de inteiros. */

vetor1 = [5,3,2] //10
vetor2 = [7,3]//10

const mediaDeDoisVetores = (vetor1,vetor2) => {
  media = 0
  somaV1 = 0
  somaV2 = 0
  contadorV1 = 0
  contadorV2 = 0

  for (let i = 0; i < vetor1.length; i++){
    if(vetor1[i] !== undefined){
      somaV1 += vetor1[i]
      contadorV1++
    }  
  }
  for(let i=0; i < vetor1.length; i++){
    if(vetor2[i]!== undefined){
      somaV2 +=  vetor2[i]
      contadorV2++
    }
  }
  media= (somaV1 + somaV2)/(contadorV1 + contadorV2)

  console.log(`soma dos valores dos vetores é ${somaV1} + ${somaV2} = `,somaV1 + somaV2)  
  console.log(`soma da qtd dos dois vetores v1= ${contadorV1} + v2= ${contadorV2} = `,contadorV1 + contadorV2)  
  console.log('Média dos vetores é = ',media)  

}
mediaDeDoisVetores(vetor1,vetor2)