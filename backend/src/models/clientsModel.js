// cria uma funcao que faz a query para recuperar os dados dos clientes no DB
const connection = require("./connection");

const bcrypt = require("bcrypt");

const getAll = async () => {
  const [clients] = await connection.execute("SELECT * FROM clients");
  return clients;
};

const addClient = async (clientData) => {
  const saltsRounds = 10;
  const hash = await bcrypt.hash(clientData.password, saltsRounds);
  const query =
    "INSERT INTO clients(name, email, password, dateOfBirthday, phone, haircutsCompleted, adminId) VALUES (?, ?, ?, ?, ?, ?, ?);";
  const values = [
    clientData.name,
    clientData.email,
    hash,
    clientData.dateOfBirthday,
    clientData.phone,
    clientData.haircutsCompleted,
    clientData.adminId,
  ];

  const [addedClient] = await connection.execute(query, values);
  return addedClient.insertId;
};

const login = async (email, password) => {
  const [client] = await connection.execute(
    "SELECT * from clients WHERE email = ?",
    [email]
  );
  if (client.length === 0) {
    return null;
  }
  const clientStoredPassword = client[0].password;
  const isClientPasswordMatch = bcrypt.compare(password, clientStoredPassword);
  if (!isClientPasswordMatch) {
    return null;
  } else {
    return client[0];
  }
};

const deleteClientById = async (clientId) => {
  const query = "DELETE FROM clients WHERE id = ?";
  const [deletedClient] = await connection.execute(query, [clientId]);
  return deletedClient.affectedRows > 0;
};

const editClientById = async (clientId, updateFields) => {
  // Checa se algum campo foi alterado
  if (!updateFields || Object.keys(updateFields).length === 0) {
    throw new Error("Nenhum campo de atualização fornecido.");
  }

  // Constroi uma consulta SQL dinamicamente com base nos campos de atualização
  const fieldNames = Object.keys(updateFields);
  const fieldValues = fieldNames.map((fieldName) => updateFields[fieldName]);
  const setClauses = fieldNames.map((fieldName) => `${fieldName}=?`).join(", ");

  const query = `
    UPDATE clients 
    SET ${setClauses}
    WHERE id = ?
  `;
  const values = [...fieldValues, clientId];

  try {
    const [editedClient] = await connection.execute(query, values);
    return editedClient.affectedRows > 0;
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
  login,
};
