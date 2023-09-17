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

module.exports = {
  getAllAdmins,
  createAdmin
};
