const connection = require("./connection");

// Classe criada para facilitar a modelagem de dados do Admin, porém não sei se vai ser assim.
// Criar o model para admin, seguindo o mesmo padrão do cliente.
// class Admin {
//   constructor(id, name, email, password) {
//     this.id = id;
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }
// }

const getAllAdmins = async ()=>{
  const [admins] = await connection.execute("SELECT * from admin ")
  return admins;
}


module.exports = {
  getAllAdmins,
}
