const adminModel = require("../models/adminModel");


const getAllAdmins = async (req, res) => {
  const admins = await adminModel.getAllAdmins();
  return res.status(200).json(admins);
};

module.exports = {
  getAllAdmins,
};
