// cria um controlador que vai chamar a funcao getAll no clientsModel que tem acesso direto ao DB e retorna os clientes

const clientsModel = require("../models/clientsModel");
const jwt = require("jsonwebtoken");

const getAll = async (req, res) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.SECRET);
  const adminId = decoded.id;
  const clients = await clientsModel.getAll(adminId);
  return res.status(200).json(clients);
};

const getClientById = async (req, res) => {
  // const clientId = req.params.clientId; // Assumindo que o parâmetro seja "clientId"
  // const client = await clientsModel.getClientById(clientId);

  // return res.status(200).json(client);

  // const token =
  //   req.headers.authorization && req.headers.authorization.split(" ")[1];
  // const decoded = jwt.verify(token, process.env.SECRET);
  const clientId = req.params.id;

  const client = await clientsModel.getClientById(clientId);
  return res.status(200).json(client[0]);
};

const addClient = async (req, res) => {
  const newClientData = req.body;
  try {
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    const adminId = decoded.id; // Obtém o ID do admin do token
    const insertId = await clientsModel.addClient(newClientData, adminId);
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
      res.status(200).json({ message: "Cliente exluído com sucesso." });
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

const updateHaircuts = async (req, res) => {
  const clientId = req.params.id;
  const { action } = req.body;

  try {
    if (action === "add") {
      // Adicione 1 corte ao cliente
      await clientsModel.addHaircut(clientId, 1);
    } else if (action === "remove") {
      // Remova 1 corte do cliente
      await clientsModel.removeHaircut(clientId, 1);
    } else {
      res.status(400).json({ error: "Ação inválida" });
      return;
    }

    res.status(200).json({ message: "Corte atualizado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar cortes do cliente" });
  }
};

module.exports = {
  getAll,
  getClientById,
  addClient,
  deleteClientById,
  editClientById,
  updateHaircuts,
};
