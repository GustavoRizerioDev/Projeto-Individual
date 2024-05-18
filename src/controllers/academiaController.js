var academiaModel = require("../models/academiaModel");

function listarAcademia(req, res) {
  academiaModel.listarAcademia().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listarTreinos(req, res) {
  academiaModel.listarTreinos().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  academiaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function enviar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var idUsuario = req.params.idUsuario;
  var genero = req.body.generoServer;
  var avaliacao = req.body.avaliacaoServer;
  var academia = req.body.academiaServer;
  var treino = req.body.treinoServer;

  // Faça as validações dos valores
  if (genero == undefined) {
    res.status(400).send("Seu genero está undefined!");
  } else if (avaliacao == undefined) {
    res.status(400).send("Seu avaliacao está undefined!");
  } else if (academia == undefined) {
    res.status(400).send("Sua academia está undefined!");
  } else if (treino == undefined) {
    res.status(400).send("Seu treino está undefined!");
  } else {
    academiaModel
      .enviar(idUsuario, genero, academia, avaliacao, treino)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o formulario! Erro: ",
          erro.sqlMessage,
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarPorId,
  listarAcademia,
  listarTreinos,
  enviar,
};
