/*
Nesse exemplo, não precisamos chamar o bind por que 
ao usarmos arrow functions, o this está dentro do contexto Pessoa
*/ 

function Pessoa(){
  this.age = 0

  setInterval(()=> {
    this.age++
    console.log((this.age))
  },1000)
}

new Pessoa