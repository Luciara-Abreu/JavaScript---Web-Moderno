console.log("------------------------------------------------");
console.log("Arrays: implementar o Foreach #02");


Array.prototype.forEach2 = function(callback) { 
  for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const aprovados = ['Lucas', 'Eder','Luci','Anna','Maria','Izabel','Daiane']
// funcção de callback
aprovados.forEach2(function(nome, indice){
  console.log(`${indice + 0}) ${nome}`)
})