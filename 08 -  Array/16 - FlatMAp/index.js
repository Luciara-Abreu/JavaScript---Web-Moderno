console.log("------------------------------------------------");
console.log("Array - FlatMap");

const escola = [
  {
    nome: 'Turma M1',
    alunos: [
      {
      nome: 'Gustavo',
      nota:8.1
      },
      {
      nome: 'Anna',
      nota:9
      },
      {
      nome: 'Lucas',
      nota:9.1
      }]
  },    
  {
    nome: 'Turma M2',
    alunos: [
      {
        nome: 'Rebeca',
        nota:7.3
      },
      {
        nome: 'Roberto',
        nota: 8.9
      },
      {
        nome: 'Carla',
        nota: 7.6
      }]
  }
]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log("------------------------------------------------");
console.log([].concat([8.7,9.3], [8.9,7.3]))

Array.prototype.flatMap = function(callback){
  return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(getNotasDaTurma)
console.log(nota2)