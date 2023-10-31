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

const editAdminById = async (adminId, updateFields) => {
  const saltsRounds = 10;
  if (!updateFields || Object.keys(updateFields).length === 0) {
    throw new Error("Nenhum campo de atualização fornecido.");
  }

  const fieldNames = Object.keys(updateFields);
  const fieldValues = [];

  const setClauses = await Promise.all(
    fieldNames.map(async (fieldName) => {
      const value = updateFields[fieldName];
      if (value === undefined || value === null) {
        throw new Error(
          `O campo ${fieldName} não pode ser nulo ou indefinido.`
        );
      }
      if (fieldName === "password") {
        // Hash da senha usando bcrypt
        const hash = await bcrypt.hash(value, saltsRounds);
        fieldValues.push(hash);
        return `${fieldName} = ?`;
      } else {
        fieldValues.push(value);
        return `${fieldName} = ?`;
      }
    })
  );

  const setClause = setClauses.join(", ");

  const query = `
    UPDATE admin 
    SET ${setClause}
    WHERE id = ?
  `;

  fieldValues.push(adminId);

  try {
    const [editedAdmin] = await connection.execute(query, fieldValues);
    return editedAdmin.affectedRows > 0;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getAllAdmins,
  createAdmin,
  editAdminById,
  login,
};
