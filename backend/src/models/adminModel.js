const connection = require("./connection");


const getAllAdmins = async () => {
  const [admins] = await connection.execute("SELECT * from admin ");
  return admins;
};

const createAdmin = async (adminData) => {
  const query = "INSERT INTO admin (name, email, password) VALUES (?, ?, ?)";
  const values = [adminData.name, adminData.email, adminData.password];
  const [createdAdnim] =  await connection.execute(query, values);
  return createdAdnim.insertId;
};

module.exports = {
  getAllAdmins,
  createAdmin,
};
