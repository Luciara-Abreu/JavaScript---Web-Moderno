console.log("------------------------------------------------");
console.log("");

const pai = { nome: "Luci", corCabelo: "Luzes Loiro" };

const filha1 = Object.create(pai);
filha1.nome = "Maria";
console.log(`${filha1.nome}, tem cabelo ${filha1.corCabelo}`);

console.log("------------------------------------------------");
const filha2 = Object.create(pai, {
  nome: {value:'Bia', writable: false, enumerable: true}
  // writable = nome não poderá ser alterado 
  // enumerable = true, é que ele vai ser listado. 
});
console.log(`${filha2.nome}, tem cabelo ${filha2.corCabelo}`);
// vamos tentar mudar o nome da filha 2
filha2.nome="Carla"
console.log(filha2.nome) // vimos que writable: false bloqueia mudanças

console.log("------------------------------------------------");
//Para ver as chaves que os objetos possuem.: 
console.log(Object.keys(filha1), Object.keys(filha2))

console.log("------------------------------------------------");
// para listar todos atributos de bjetos podemos fazer assim.:
// hasOwnProperty = Valida de tal item pertence ao objeto.
for(let key in filha2){
  filha2.hasOwnProperty(key) ? 
      console.log('Tem essa chave: ', key) : console.log(`Por herança tem essa chave: ${key}`)
}