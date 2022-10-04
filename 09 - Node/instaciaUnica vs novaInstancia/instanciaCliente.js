const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()
console.log("------------------------------------------------");
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorB.valor)
console.log("------------------------------------------------");
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor,contadorD.valor)
console.log("------------------------------------------------");
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)