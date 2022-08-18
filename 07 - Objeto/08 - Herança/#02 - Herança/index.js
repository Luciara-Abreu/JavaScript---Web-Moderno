console.log("------------------------------------------------");
console.log('Cadeias de protótipos (prototype chain)')

Object.prototype.atri0 = 'Z' // Não faça isso em casa.
const avo = {atri1: 'A'}
const pai = {__proto__: avo, atri2: 'B'}
const filho = {__proto__: pai, atri3: 'C'}

console.log(filho.atri0,filho.atri1,filho.atri2,filho.atri3)

console.log("------------------------------------------------");
console.log('Outro exemplo de cadeias de prototipois')

const carro ={
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta){
    if(this.velAtual + delta <= this.velMax){
      this.velAtual += delta
    }else{
      this.velAtual = this.velMax
    }
  },
  status(){
    return `${this.velAtual}km/h de ${this.velMax}km/h`
  }
}

const ferrari = {
  modelo: 'f40',
  velMax: 324 // shadowing
}

const volvo = {
  modelo: 'v40',
  status(){//estamos sombreando o status do objeto volvo e vamos usar da classe pai
    return `${this.modelo}: ${super.status()}`
  }
}

console.log("------------------------------------------------");
console.log('Aqui vamos estabelecer a relação entre ferrari e carro',
'Ou seja ferrari tem carro como seu protótipo, o segundo paramentro é o prototipo')

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log("------------------------------------------------");
console.log('Aqui ele mostra que o modelo e a a funçao status ...')
console.log(volvo)
console.log("------------------------------------------------");
console.log('...mas se chamarmos a função')
volvo.acelerarMais(100)
console.log(volvo.status())
console.log("------------------------------------------------");
console.log('Aqui a ferrari herda da carro mas como ela tem a sa velMax ela não',
' usa da classe pai, isso se chama sombreamento ou shadowing')
ferrari.acelerarMais(300)
console.log(ferrari.status())