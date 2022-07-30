console.log(
  "--/ * Closure é o escopo criado quando uma função é declarada. " +
    "Esse escopo permite a função acessar e manipular variáveis externas à função  * /--"
);

// contexto léxico em ação
const x = "Esse X é Global"

function fora() {
  const x = "Esse X é Local"
  function dentro() {
    return x
  }
  return dentro()
}

const minhaFuncao = fora()
console.log(minhaFuncao)
