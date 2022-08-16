// Forma literal  que é com conchetes

const obj1 = {};
console.log(obj1);

// Object em  JS - Apartir de uma função construtora
console.log(typeof Object, typeof Object);
const obj2 = Object;
console.log(obj2);

//Funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}
const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("notebook", 2998.99, 0.25);
console.log('produto 1 =', p1.getPrecoComDesconto())
console.log('produto 2 =', p2.getPrecoComDesconto())

// Função factory = é um padrão de projeto. ele fabrica um objeto

function criarFuncionario(nome, salarioBase, faltas){
  return{
    nome,
    salarioBase,
    faltas,
    getSalario(){
      return(salarioBase /30 * (30 - faltas))
    }
  }
}

const f1 = criarFuncionario('Pedro', 7980, 4)
const f2 = criarFuncionario('jose', 7500, 3)
const f3 = criarFuncionario('Anna', 11400, 1)

console.log('Funcionário',f1.nome, 'ganhará o equivalente a R$', f1.getSalario())
console.log('Funcionário',f2.nome, 'ganhará o equivalente a R$', f2.getSalario())
console.log('Funcionário',f3.nome, 'ganhará o equivalente a R$', f3.getSalario())


// Object.create

const filha = Object(null)
filha.nome = "Anna"
console.log(filha)

// Uma função famosa que retora um objeto.... 
const formJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(formJSON)
