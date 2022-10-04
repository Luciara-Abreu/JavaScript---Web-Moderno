const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
console.log("------------------------------------------------");
console.log("O axios é um claint que faz requisições HTTP");
const axios = require('axios')

axios.get(url).then(response => {
  const funcionarios = response.data
  console.log(funcionarios)

})