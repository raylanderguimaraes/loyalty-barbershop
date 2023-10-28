const connection = require("./connection");

const bcrypt = require("bcrypt");

const getAllAdmins = async () => {
  const [admins] = await connection.execute("SELECT * from admin ");
  return admins;
};

const login = async (email, password) => {
  const [admin] = await connection.execute(
    "SELECT * from admin WHERE email = ?",
    [email]
  );
  if (admin.length === 0) {
    return null;
  }
  const storedPassword = admin[0].password;
  const isPasswordMatch = await bcrypt.compare(password, storedPassword);

  if (!isPasswordMatch) {
    return null;
  } else {
    return admin[0];
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
