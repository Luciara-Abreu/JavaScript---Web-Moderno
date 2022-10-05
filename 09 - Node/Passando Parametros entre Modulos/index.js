console.log('Passando parâmetros entre módulos')

module.exports = function(...nomes){
  return nomes.map(nome => `Boa semana ${nome}!`)
}