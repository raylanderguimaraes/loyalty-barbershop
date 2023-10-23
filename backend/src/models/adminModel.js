const connection = require("./connection");

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
  const query = "INSERT INTO admin (name, email, password) VALUES (?, ?, ?)";
  const values = [adminData.name, adminData.email, adminData.password];
  const [createdAdnim] = await connection.execute(query, values);
  return createdAdnim.insertId;
};

module.exports = {
  getAllAdmins,
  createAdmin,
  login,
};
