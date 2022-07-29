const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    console.log(this.saudacao);
  },
};
pessoa.falar();

// se guardarmos os  arguments de pessoa dentro de uma variável,
// vemos o conflito entre paradigma : funcional e OO

console.log("-----/ * aqui vemos o conflito *  /-----");
const falar = pessoa.falar;
falar(); 
// este falar não está dentro do contexto pessoa por isso ele não localiza o this.saudação

console.log("-----/ * usar o bind para resolver o problema *  /-----");

const falarDoContextoPessoa = pessoa.falar.bind(pessoa)
const falar2 = pessoa.falar.bind(pessoa);
  falarDoContextoPessoa()
  falar2()

