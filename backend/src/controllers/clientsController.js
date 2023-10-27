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

const deleteClientById = async (req, res) => {
  const clientDeletedId = req.params.id;
  try {
    isDeleted = await clientsModel.deleteClientById(clientDeletedId);
    if (isDeleted) {
      res.status(200).json({ message: "CLiente exluído com sucesso." });
    } else {
      res
        .status(404)
        .json({ message: "Cliente não encontrado ou não pôde ser excluído" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao excluir cliente." });
  }
};

const editClientById = async (req, res) => {
  const clientId = req.params.id;
  const clientData = req.body;
  try {
    const isEdited = await clientsModel.editClientById(clientId, clientData);
    if (isEdited) {
      res.status(200).json({ message: "Cliente editado com sucesso." });
    } else {
      res
        .status(404)
        .json({ message: "Cliente não encontrado ou não pôde ser editado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao editar cliente." });
  }
};






module.exports = {
  getAll,
  addClient,
  deleteClientById,
  editClientById,
};
