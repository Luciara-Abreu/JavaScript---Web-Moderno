// COLEÇÃO DINAMICA DE PARES CHAVE/VALOR
// consigo add dinamicamente ao criar o objeto
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

// consigo excluir  dinamicamente 
delete produto.preco
delete produto['marca do produto']
console.log(produto)



const carro = {
  modelo: 'A4',
  valor: 89000,
  qtPOtas: 4,
    proprietario: {
    nome: 'Luci',
    cpf: 55525555555,    
    endereco: {
      logradouro: 'Rua das flores',
      numero: 1065,
      cep: 555,
      UF: 'RS'
    }
  },
  condutores :[
    {
    nome: 'Junior',
    idade: 45
    },
    {
      nome: 'Anna',
      idade: 35
    }
  ],
  calcularValorSeguro: function(){
    //...
  }
}

carro.proprietario.endereco.numero = 200

console.log('carro =', carro)
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log('carro =', carro)