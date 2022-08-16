// callback quer dizer chamar de volta

const fabricantes = ['Mercedes', 'Audi', 'Chevrolet', 'BMW']
function imprimir(nome, indice){
  console.log(`${indice +1}. ${nome}`)
}

fabricantes.forEach(imprimir)