// cria uma funcao que faz a query para recuperar os dados dos clientes no DB
const connection = require("./connection");

const getAll = async () => {
  const [clients] = await connection.execute("SELECT * FROM clients");
  return clients;
};

module.exports = {
  getAll,
};
