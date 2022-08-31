console.log("------------------------------------------------");
console.log("");

// função construtora
function Aula(nome, videoID) {
  this.nome = nome;
  this.videoID = videoID;
}
//instanciando o obj
const aula1 = new Aula("Bem vindo a aula de JS", 123);
const aula2 = new Aula("Bem vindo a aula de React", 456);
console.log(aula1, aula2);
console.log("------------------------------------------------");
console.log("Simulação para ver o que acontece quando usamos o operador new");
//Criar o proprio new
// Esse obj será criado apartir da função construtora Aula
function novoNew(f, ...params) {
  const obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, params);
  return obj;
}
const aula3 = new novoNew(Aula, "Bem vindo a aula de JS", 123);
const aula4 = new novoNew(Aula, "Bem vindo a aula de React", 456);
console.log(aula3, aula4);

console.log("Obrigado New por já existir kkkkkkkk :) ");
