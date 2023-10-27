


const adminModel = require("../models/adminModel");
const clientsModel = require("../models/clientsModel");

const login = async (req, res) => {
    const { email, password, userType } = req.body;
    try {
      let isLoged = false;
      if (userType === "admin") {
        isLoged = await adminModel.login(email, password);
      } else if (userType === "client") {
        isLoged = await clientsModel.login(email, password);
      } else {
        res.status(400).json({ error: "Tipo de usuário inválido" });
        return;
      }
  
      if (isLoged) {
        if (userType === "admin") {
          res.send("Voce logou como admin");
        } else if (userType === "client") {
          res.send("Você logou como cliente");
        } else {
          res.status(401).json({ error: "Credenciais inválidas" });
        }
      }
    } catch (error) {
      res.status(500).json({ error: "Erro no servidor" });
    }
  };

  module.exports = {
    login
  }