// importa o express e instancia um router utilizando a funcao Router() do express
const express = require("express");
const router = express.Router();
const clientsController = require("../controllers/clientsController");
const adminsController = require("../controllers/adminController");
// rota padrao home
router.get("/", (req, res) => {
  res.status(200).send("Olá, mundo!");
});

// rota lista todos os admins
router.get("/admins", adminsController.getAllAdmins);

// rotas para criar, editar e deletar admins
router.post("/admin/create", adminsController.createAdmin);

// rota lista todos clients
router.get("/clients", clientsController.getAll);

// rotas para editar os clients
router.post("/admin/add-client", clientsController.addClient);
router.delete("/admin/clients/:id", clientsController.deleteClientById);
router.put("/admin/clients/:id", clientsController.editClientById);

module.exports = router;
