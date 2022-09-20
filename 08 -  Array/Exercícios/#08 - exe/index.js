console.log("------------------------------------------------");
/*8) Crie uma função que receba 2 parâmetros. O primeiro é o 
* elemento que repetirá e o segundo será o numero de vezes 
* que ele repetirá.
*/
console.log("------------------------------------------------");

const repete = (x, quantoRepete) => {
  let result = []
    for(let i=0; i<quantoRepete; i++)
    result.push(x)
    return result
}

resultado = repete(5, 3)
console.log(resultado)