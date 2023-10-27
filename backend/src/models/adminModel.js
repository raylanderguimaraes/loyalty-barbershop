const connection = require("./connection");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const getAllAdmins = async () => {
  const [admins] = await connection.execute("SELECT * from admin ");
  return admins;
};

const login = async (email, password) => {
  const [admin] = await connection.execute(
    "SELECT * from admin WHERE email = ? AND password = ? ",
    [email, password]
  );
  if (admin.length > 0) {
    return admin[0];
  } else {
    return null;
  }
};

const createAdmin = async (adminData) => {
  const saltsRounds = 10;
  try {
    const hash = await bcrypt.hash(adminData.password, saltsRounds);
    const query = "INSERT INTO admin (name, email, password) VALUES (?, ?, ?)";
    const values = [adminData.name, adminData.email, hash];
    const [createdAdnim] = await connection.execute(query, values);
    return createdAdnim.insertId;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getAllAdmins,
  createAdmin,
  login,
};
