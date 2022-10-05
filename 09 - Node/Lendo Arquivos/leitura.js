const fs = require("fs");
const { functions } = require("lodash");

const caminho = __dirname + "/arquivo.json";
console.log("-------------------------------------------------------------");
// sincrono
const conteudo = fs.readFileSync(caminho, "utf8");
console.log(conteudo);
console.log("-------------------------------------------------------------");
// assincrono

fs.readFile(caminho, "utf8", (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});

console.log("-------------------------------------------------------------");
console.log("Tem um metodo bemmmmmmm mais siples par ler o arquivo json");
console.log("-------------------------------------------------------------");

const config = require("./arquivo.json");
console.log(config);
console.log(config.db);

console.log("-------------------------------------------------------------");
console.log("Leitura de uma pasta");
console.log("-------------------------------------------------------------");

fs.readdir(__dirname,(err, arquivos) => {
  console.log('Conteudo da pasta .........')
  console.log(arquivos);
})


