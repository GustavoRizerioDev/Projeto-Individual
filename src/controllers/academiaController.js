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
  // Recupera os valores do formulário
  var idUsuario = req.params.idUsuario;
  var genero = req.body.generoServer;
  var avaliacao = req.body.avaliacaoServer;
  var academia = req.body.academiaServer;
  var treino = req.body.treinoServer;

  // Valida os valores do formulário
  if (genero == undefined) {
    res.status(400).send("Seu gênero está undefined!");
  } else if (avaliacao == undefined) {
    res.status(400).send("Sua avaliação está undefined!");
  } else if (academia == undefined) {
    res.status(400).send("Sua academia está undefined!");
  } else if (treino == undefined) {
    res.status(400).send("Seu treino está undefined!");
  } else {
    academiaModel
      .enviar(idUsuario, genero, academia, avaliacao, treino)
      .then(function (resultado) {
        res.json({
          idUsuario: idUsuario,
          genero: genero,
          avaliacao: avaliacao,
          academia: academia,
          treino: treino,
          resultado: resultado, 
        });
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o formulário! Erro: ",
          erro.sqlMessage,
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function buscarUltimasMedidas(req, res) {
  const limite_linhas = 100;
  var id = req.params.idAcademia;

  console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

  academiaModel
    .buscarUltimasMedidas(id, limite_linhas)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage,
      );
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  buscarPorId,
  listarAcademia,
  listarTreinos,
  enviar,
  buscarUltimasMedidas,
};
