// Para acessar funções usamos as anotações .

console.log(Math.ceil(6.1)) // arredonda par mais

// Criamos um objeto
const obj1 = {}
obj1.nome = 'bola';  // criado o atributo dinamicamente apartir do obj1
console.log(obj1.nome) // acessando o nome 

// this significa que o nome ficará visivel para quem instacinar a classe.
function Obj(nome) {
  this.nome = nome;
  this.exec = function () {
    console.log('Aqui está o => Exec.....')
  }
}
console.log('-------------------------------- Obj2 e Obj3 ')

const Obj2 = new Obj('Luci')
const Obj3 = new Obj('Lucas')
Obj3.exec()

console.log('mamãe =>', Obj2.nome)
console.log('Nene => ', Obj3.nome)
