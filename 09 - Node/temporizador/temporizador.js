// temporizadores => setTimeout / setInterval // node-schedule
//Disparar tarefas agendadas usando node-schedule

const schedule = require("node-schedule");
/*
string parecida com padrão do cron
primeiro ítem dispara de 5 em 5 segundos
segundo ítem refere-se em qualquer minuto
o outro astersco refere-se a hora
o outro asteriscos refere-se ao dia do mes
o outro refere-se ao mês
o ultimo se refere ao dia da semana que no caso domingo seria o zero
 */
const tarefa1 = schedule.scheduleJob("*/5 * * * * 1", function () {
  console.log("Executando tarefa 1!", new Date().getSeconds());
});

// Criar uma tarefa que finaliza o temporizador de cima após 20 segundos
setTimeout(function () {
  tarefa1.cancel();
  console.log("Cancelando a Tarefa 1!");
}, 20000);

/* Criar uma regra que tem dentro do schedule.RecurrenceRule que aplica quando 
colocado os parametros que queres que replique*/

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 22;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log("Executando a Tarefa 2!", new Date().getSeconds());
});
