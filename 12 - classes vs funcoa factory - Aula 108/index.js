console.log("--/ * Classe vs Funcões factory. * /--");
console.log("--/ * primeiro exemplo Class. * /--");

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`meu nome é ${this.nome}`);
  }
}
const p1 = new Pessoa("João");
p1.falar();

console.log("--------------------------------------");
console.log("--/ * segundo exemplo function. * /--");

const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Ola!! Eu sou ${nome}`),
  };
};
const p2 = criarPessoa("Anna");
p2.falar();
