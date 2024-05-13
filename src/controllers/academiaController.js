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

function enivar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  var idUsuario = req.params.idUsuario;

  // Faça as validações dos valores
  if (email == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (nome == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else {
    usuarioModel
      .cadastrar(email, nome, senha)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
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
};
