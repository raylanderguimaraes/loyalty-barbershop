// cria um controlador que vai chamar a funcao getAll no clientsModel que tem acesso direto ao DB e retorna os clientes

const clientsModel = require("../models/clientsModel");

const getAll = async (req, res) => {
  const clients = await clientsModel.getAll();
  return res.status(200).json(clients);
};

const addClient = async (req, res) => {
  const newClientData = req.body;

  try {
    const insertId = await clientsModel.addClient(newClientData);
    res
      .status(201)
      .json({ message: "CLiente adicionado com sucesso.", insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao adicionar cliente." });
  }
};

module.exports = {
  getAll,
  addClient,
};
