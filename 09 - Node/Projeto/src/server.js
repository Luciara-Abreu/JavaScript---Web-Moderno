const porta = 3003;

const express = require("express");
const { rest } = require("lodash");
const app = express();

// metodo send converte para JSON
app.get("/produtos", (req, res, next) => {
  res.send({ nome: "Notebook", preco: 123.45 });
});

app.listen(porta, () => {
  console.log(`Servidor está executando na porta ${porta}`);
});

/*
Nessa aula, configuramos o Express, o Postman, o nodemon, 
tudo para iniciar um pequeno projeto para simular algo proximo de uma API REST
*/
