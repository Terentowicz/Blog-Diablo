var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/fotos", function (req, res) {
    usuarioController.listarFotos(req, res);
})

router.patch("/adicionarFotos", function (req, res) {
    console.log("To na rota usuarios/addFoto")
    usuarioController.attFoto(req, res);
})

module.exports = router;