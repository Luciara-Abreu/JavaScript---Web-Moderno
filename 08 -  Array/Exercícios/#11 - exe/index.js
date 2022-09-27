console.log("------------------------------------------------");
/*11)
*Crie uma função que receba um array e retorne apenas os numeros 
*presentes no array
*/
console.log("------------------------------------------------");

const diversos = ['A',"Nossa Senhora", 1,3, 'Então já era!!', 4,2]
const result = []

const apenasNumeros = (diversos) =>{
  for(let itemI of diversos ) {
    if(typeof itemI === "number")
    result.push(itemI)
  }
  return result 
}
console.log(apenasNumeros(diversos))
