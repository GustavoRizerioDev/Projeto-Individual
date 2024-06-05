var express = require("express");
var router = express.Router();

var academiaController = require("../controllers/academiaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/enviar/:idUsuario", function (req, res) {
    academiaController.enviar(req, res);
})

router.get("/buscar/:id", function (req, res) {
  academiaController.buscarPorId(req, res);
});

router.get("/listarAcademia", function (req, res) {
  academiaController.listarAcademia(req, res);
});

router.get("/listarTreinos", function (req, res) {
  academiaController.listarTreinos(req, res);
});

router.get("/ultimas", function (req, res) {
  medidaController.buscarUltimasMedidas(req, res);
});

module.exports = router;