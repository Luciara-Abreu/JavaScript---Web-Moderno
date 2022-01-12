function compras (trabalho1, trabalho2 ) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  //const comprarTv32 = (!!trabalho1 ^ trabalho2); //bitwiase exclusivo
  const comprarTv32 = trabalho1 !=trabalho2; // a diferença simula um ou excluisivo
  const manterSaudavel = !comprarSorvete;

  /* O java script só suporta um retorno porém temos 4 constantes então podemos
    criar um objeto e retornar todos */

    return {
      comprarSorvete,comprarTv50,comprarTv32,manterSaudavel
    }
}
console.log('--Tá podendo!!--');
console.log(compras(true, true));

console.log('-- Tá bom!!  --');
console.log(compras(true, false));

console.log('-- Força!!   --');
console.log(compras(false, true));

console.log('-- Na próxima --');
console.log(compras(false, false));