// Importa o app instanciado em outro arquivo, define a porta e coloca o servidor no ar ouvindo a porta definida

const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
