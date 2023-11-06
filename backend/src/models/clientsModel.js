// cria uma funcao que faz a query para recuperar os dados dos clientes no DB
const connection = require("./connection");

const bcrypt = require("bcrypt");

const getAll = async (adminId) => {
  const [clients] = await connection.execute(
    "SELECT id, name, email, dateOfBirthday, phone, haircutsCompleted FROM clients WHERE adminId = ?",
    [adminId]
  );
  return clients;
};
//
const getClientById = async (clientId) => {
  const rows = await connection.execute(
    "SELECT id, name, email, dateOfBirthday, phone, haircutsCompleted FROM clients WHERE id = ?",
    [clientId]
  );

  console.log(rows[0]);

  if (rows.length > 0) {
    return rows[0];
  } else {
    return null;
  }
};

const addClient = async (clientData, adminId) => {
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
    adminId,
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
  const saltsRounds = 10;
  // Checa se algum campo foi alterado
  if (!updateFields || Object.keys(updateFields).length === 0) {
    throw new Error("Nenhum campo de atualização fornecido.");
  }

  // Constroi uma consulta SQL dinamicamente com base nos campos de atualização
  const fieldNames = Object.keys(updateFields);
  const fieldValues = fieldNames.map((fieldName) => updateFields[fieldName]);
  const setClauses = await Promise.all(
    fieldNames.map(async (fieldName) => {
      if (fieldName === "password") {
        const hash = await bcrypt.hash(updateFields[fieldName], saltsRounds);
        return `${hash}= ?`;
      } else {
        return `${fieldName}=?`;
      }
    })
  );

  const setClause = setClauses.join(", ");

  const query = `
    UPDATE clients 
    SET ${setClause}
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

const addHaircut = async (clientId) => {
  const query =
    "UPDATE clients SET haircutsCompleted = haircutsCompleted + 1 WHERE id = ?";
  const values = [clientId];

  try {
    const [result] = await connection.execute(query, values);
    return result.affectedRows > 0; // Verifica se pelo menos uma linha foi afetada
  } catch (error) {
    throw error;
  }
};

const removeHaircut = async (clientId) => {
  const query =
    "UPDATE clients SET haircutsCompleted = GREATEST(haircutsCompleted - 1, 0) WHERE id = ?";
  const values = [clientId];

  try {
    const [result] = await connection.execute(query, values);
    return result.affectedRows > 0; // Verifica se pelo menos uma linha foi afetada
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAll,
  getClientById,
  addClient,
  deleteClientById,
  editClientById,
  login,
  addHaircut,
  removeHaircut,
};
