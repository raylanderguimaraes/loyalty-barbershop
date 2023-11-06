const adminModel = require("../models/adminModel");

const getAllAdmins = async (req, res) => {
  const admins = await adminModel.getAllAdmins();
  return res.status(200).json(admins);
};

const createAdmin = async (req, res) => {
  const newAdminData = req.body;
  try {
    const createdAdminId = await adminModel.createAdmin(newAdminData);
    res
      .status(201)
      .json({ message: "Administrador criado com sucesso", createdAdminId });
  } catch (error) {
    res.status(500).json({ error: "Não foi possível criar o administrador" });
  }
};

const editAdmin = async (req, res) => {
  const adminId = req.params.id;
  const adminData = req.body;
  console.log(adminId);
  try {
    const isEdited = await adminModel.editAdminById(adminId, adminData);

    if (isEdited) {
      res.status(200).json({ message: "Admin editado com sucesso." });
    } else {
      res
        .status(404)
        .json({ message: "Admin não encontrado ou não pôde ser editado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao editar admin." });
  }
};

module.exports = {
  getAllAdmins,
  createAdmin,
  editAdmin,
};
