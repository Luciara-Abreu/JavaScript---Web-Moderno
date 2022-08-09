/**
 * Fazer um programa para encontrar todos os pares entre 1 e 100.
 */

const imprimirOsPares =() =>{
  x=0
  while(x <=100){
    if(x%2 == 0){
      console.log(x)
    }
    x++;
  }
}
imprimirOsPares()