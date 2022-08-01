/** Juros simples e juros composto
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */


const taxaDeJuros = 10/100

function jurosSimples (capitalInicial, juros, tempo) {
  return capitalInicial + (capitalInicial * juros * tempo )  
 }
 console.log(jurosSimples(100,10/100, 2))


function jurosComposto (capitalInicial, juros, tempo) {
  return capitalInicial * (1 + juros) ** tempo  
 }
 console.log(jurosComposto(100,10/100, 2))






