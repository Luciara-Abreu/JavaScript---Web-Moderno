/**
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */
// console.log('--------------- primeira tentativa ------------------------------')
// const diaDaSemana = (x) => {
//   console.log(
//     "Escolha um dia de 1 a 7 para saber o dia é dia útil, fim de semana "
//   );
//   if (x == 1 || x == 7) {
//     return console.log("Fim de semana");
//   } else {
//     console.log("Dia util");
//   }
// };
// diaDaSemana(3);

// console.log('--------------- segunda tentativa ------------------------------')
// const diaDaSemanaDetalhado = (x) => {
//   console.log('Escolha um dia de 1 a 7 para saber o dia é dia útil ou fim de semana ')
//     if(x == 1 || x == 7){
//       if(x == 1){
//         console.log('Domingo')
//       }else {
//         console.log('Sábado')
//       }
//       return  console.log('Fim de semana')
//     }else {
//       if(x == 2){
//         console.log('Segunda')
//       } else if(x ==3){
//         console.log('Terça')
//       } else if (x == 4){
//         console.log('Quarta')
//       } else if (x == 5) {
//         console.log('Quinta')
//       }else {
//         console.log('Sexta')
//       }
//       console.log('Dia util')
//     }
//   }

// diaDaSemanaDetalhado(5)

console.log(
  "--------------- terceira tentativa ------------------------------"
);

const dias = [
  { id: 1, value: "Domingo" },
  { id: 2, value: "Segunda" },
  { id: 3, value: "Terça" },
  { id: 4, value: "Quarta" },
  { id: 5, value: "Quinta" },
  { id: 6, value: "Sexta" },
  { id: 7, value: "Sábado" },
];

const QualDiaDaSemana = (dia) => {
  console.log(
    "Escolha um dia de 1 a 7 para saber o dia é dia útil ou fim de semana "
  );
  const x = dias.find((d) => d.id === dia);
  if (x.id == 1 || x.id == 7) {
    console.log("Hoje é ", x.value, ".Final de semana uhulllll!!");
  } else {
    console.log("Hoje é", x.value, ".Dia útil.");
  }
};
QualDiaDaSemana(1);
