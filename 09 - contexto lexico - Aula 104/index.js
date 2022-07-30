console.log("-----/ * contexto léxico. * /-----");

const valor = "Global";

function minhaFunction() {
  console.log(valor);
}

/*

*/
console.log(
  "-----/ * Mesmo a função 'minhaFunction()' estando dentro de outra função como mostra o exemplo, ao executar,ela trará o valor do contexto em que foi inserida, ou seja ela irá ignorar a const valor = 'Local'e irá imprimir a const valor = 'Global'.. As funções carregam com sigo os locais em que foram definidas* /-----"
);
function exec() {
  const valor = "Local";
  minhaFunction();
}
exec();
