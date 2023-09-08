// cria uma funcao que faz a query para recuperar os dados dos clientes no DB
const connection = require("./connection");

const getAll = async () => {
  const [clients] = await connection.execute("SELECT * FROM clients");
  return clients;
};

const addClient = async (clientData) => {
  const query =
    "INSERT INTO clients(name, email, password, dateOfBirthday, phone, haircutsCompleted, adminId) VALUES (?, ?, ?, ?, ?, ?, ?);";
  const values = [
    clientData.name,
    clientData.email,
    clientData.password,
    clientData.dateOfBirthday,
    clientData.phone,
    clientData.haircutsCompleted,
    clientData.adminId,
  ];

  const [result] = await connection.execute(query, values);
  return result.insertId;
};

const deleteClientById = async (clientId) => {
  const query = "DELETE FROM clients WHERE id = ?";
  const [result] = await connection.execute(query, [clientId]);
  return result.affectedRows > 0;
};

const editClientById = async (clientId, clientData) => {
  const query = `
    UPDATE clients 
    SET 
      name = ?,
      email = ?,
      password = ?,
      dateOfBirthday = ?,
      phone = ?,
      haircutsCompleted = ?,
      adminId = ?
    WHERE id = ?
  `;
  const values = [
    clientData.name,
    clientData.email,
    clientData.password,
    clientData.dateOfBirthday,
    clientData.phone,
    clientData.haircutsCompleted,
    clientData.adminId,
    clientId,
  ];

  try {
    const [result] = await connection.execute(query, values);
    return result.affectedRows > 0;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getAll,
  addClient,
  deleteClientById,
  editClientById,
};
