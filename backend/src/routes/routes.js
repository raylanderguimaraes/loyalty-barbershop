// importa o express e instancia um router utilizando a funcao Router() do express
const express = require("express");
const router = express.Router();

const clientsController = require("../controllers/clientsController");
const adminsController = require("../controllers/adminController");
const authController = require("../controllers/authController");
const jwtMiddleware = require("../middlewares/jwtMiddleware");

// rota padrao home
router.get("/", (req, res) => {
  res.status(200).send("Olá, mundo!");
});

// rota lista todos os admins
router.get("/admins", jwtMiddleware.checkToken, adminsController.getAllAdmins);

// rotas para criar, editar e deletar admins
// criar uma forma de projetger essas rotas, somente o admin/master poderá acessalas
router.get("/admin-dashboard", jwtMiddleware.checkToken, (req, res) => {
  res.status(200).json({ msg: "DashBoard Admin" });
});
router.post("/admin/login", authController.login);
router.post("/client/login", authController.login);
router.post(
  "/admin/create",
  jwtMiddleware.checkToken,
  adminsController.createAdmin
);
router.patch("/admin/:id", jwtMiddleware.checkToken, adminsController.editAdmin);

// rota lista todos clients
router.get("/cliente-dashboard", jwtMiddleware.checkToken, (req, res) => {
  res.status(200).json({ msg: "DashBoard Cliente" });
});

// essa rota lista os clientes baseados no id do admin
router.get("/clients", jwtMiddleware.checkToken, clientsController.getAll);
router.get("/client", jwtMiddleware.checkToken, clientsController.getClientById);

// rota que retorna cliente pelo id
// TODO: configurar essa rota para que quando o cliente efetuar o login, retorne somente as informações referente ao seu ID;
// router.get(
//   "client/:id",
//   jwtMiddleware.checkToken,
//   clientsController.getClientById
// );

// rotas para editar os clients
// criar uma forma de projetger essas rotas, somente o admin poderá acessalas
router.post(
  "/admin/add-client",
  jwtMiddleware.checkToken,
  clientsController.addClient
);
router.delete(
  "/admin/clients/:id",
  jwtMiddleware.checkToken,
  clientsController.deleteClientById
);
router.patch(
  "/admin/clients/:id",
  jwtMiddleware.checkToken,
  clientsController.editClientById
);
router.patch(
  "/clients/:id/update-haircuts",
  jwtMiddleware.checkToken,
  clientsController.updateHaircuts
);

module.exports = router;
