/*
37) Escreva duas funções, uma para progressão aritmética e uma para progressão 
geométrica que recebam como parâmetros um número n (número de termo), 
a1 (o primeiro termo) e r (a razão) e escreva os n termos,
bem como a soma dos elementos.
 */
// Achei a descrição do exercício confuso, muito confuso!! Mais que a o exemplo

let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });
    return vetorResultado
}
console.log(multiplicaVetor(vetor, 3))
