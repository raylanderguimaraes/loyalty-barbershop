// importa o express e instancia um router utilizando a funcao Router() do express
const express = require("express");
const router = express.Router();
const clientsController = require("../controllers/clientsController");

// rota padrao home
router.get("/", (req, res) => {
  res.status(200).send("Olá, mundo!");
});

// rota lista todos clients
router.get("/clients", clientsController.getAll);

router.post("/admin/add-client", clientsController.addClient);
router.delete("/admin/clients/:id", clientsController.deleteClientById);
module.exports = router;
