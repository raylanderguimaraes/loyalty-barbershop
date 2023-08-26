// instancia o express para app, cria uma constante db referenciando a conexão com o db feita em outro arquivo de define duas rotas básicas;

const express = require("express");
const app = express();
const router = require("./routes/routes");

// faz com que o app utilize a rota de acordo com o que é requisitado pelo arquivo de rotas routes.js
app.use(express.json());
app.use(router);

module.exports = app;

// Criar rota post para adicionar cliente

// querys para criar usuarios e clientes

// INSERT INTO admin (name, email, password)
// VALUES ('Nome do Admin', 'admin@email.com', 'senha456');


