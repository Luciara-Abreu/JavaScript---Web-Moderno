function Carro(velocidadeMaxima = 200, delta = 15) {
  // atributo privado
  let velocidadeAtual = 0;

  // metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta >= velocidadeMaxima) {
      velocidadeAtual = velocidadeMaxima;
    } else {
      velocidadeAtual += delta;
    }
  };

  // metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}
console.log("-----/ * uno aceleração inicial * /-----");
const uno = new Carro();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

console.log("-----/ * uno aceleração inicial * /-----");
const opala = new Carro(350, 30);
opala.acelerar();
opala.acelerar();
opala.acelerar();
opala.acelerar();
opala.acelerar();
opala.acelerar();
opala.acelerar();
opala.acelerar();
opala.acelerar();
opala.acelerar();
opala.acelerar();
opala.acelerar();
opala.acelerar();
opala.acelerar();
console.log(opala.getVelocidadeAtual());


console.log("-----/ * para ver o que é obj e o que é função. * /-----");
console.log('Carro =>',typeof Carro)
console.log('uno =>', typeof uno,'porque foi instanciado a partir de uma função construtora')
