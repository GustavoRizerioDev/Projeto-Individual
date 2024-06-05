var express = require("express");
var router = express.Router();

var rotinaController = require("../controllers/rotinaController");

router.get("/listar", function (req, res) {
    rotinaController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    rotinaController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    rotinaController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    rotinaController.publicar(req, res);
});

router.put("/editar/:idRotina", function (req, res) {
    rotinaController.editar(req, res);
});

router.delete("/deletar/:idRotina", function (req, res) {
    rotinaController.deletar(req, res);
});

module.exports = router;