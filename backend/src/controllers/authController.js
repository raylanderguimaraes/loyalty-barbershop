const adminModel = require("../models/adminModel");
const clientsModel = require("../models/clientsModel");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password, userType } = req.body;
  try {
    let user = null;
    if (userType === "admin") {
      user = await adminModel.login(email, password);
    } else if (userType === "client") {
      user = await clientsModel.login(email, password);
    } else {
      res.status(400).json({ error: "Tipo de usuário inválido" });
      return;
    }
    if (user) {
      const token = jwt.sign(
        { id: user.id, userType: user.userType },
        process.env.SECRET,
        { expiresIn: "30min" }
      );

      if (userType === "admin") {
        res.status(200).json({ message: "Você logou como admin", token });
      } else if (userType === "client") {
        res.status(200).json({ message: "Você logou como cliente", token });
      }
    } else {
      res.status(401).json({ error: "Credenciais inválidas" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro no servidor" });
  }
};

module.exports = {
  login,
};
