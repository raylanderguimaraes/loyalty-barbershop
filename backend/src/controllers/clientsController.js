// cria um controlador que vai chamar a funcao getAll no clientsModel que tem acesso direto ao DB e retorna os clientes

const clientsModel = require("../models/clientsModel");

const getAll = async (req, res) => {
  const clients = await clientsModel.getAll();
  return res.status(200).json(clients);
};

module.exports = {
  getAll,
};
