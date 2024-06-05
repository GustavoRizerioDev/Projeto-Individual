var usuarioModel = require("../models/usuarioModel");
var academiaModel = require("../models/academiaModel"); // Certifique-se de que isso esteja corretamente importado

function autenticar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    usuarioModel
      .autenticar(email, senha)
      .then(function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

        if (resultadoAutenticar.length == 1) {
          let usuario = resultadoAutenticar[0];
          let idAcademia = usuario.idAcademia; // Certifique-se de que este campo exista e seja válido

          // Buscar últimas medidas
          academiaModel
            .buscarUltimasMedidas(idAcademia, 10) // Assumindo 10 como limite de linhas
            .then(function (resultadoMedidas) {
              res.json({
                id: usuario.idusuario,
                email: usuario.email,
                nome: usuario.nome,
                idAcademia: idAcademia,
                dadosAcademia: resultadoMedidas,
              });
            })
            .catch(function (erro) {
              console.log(erro);
              console.log(
                "\nHouve um erro ao buscar as últimas medidas! Erro: ",
                erro.sqlMessage,
              );
              res.status(500).json(erro.sqlMessage);
            });
        } else if (resultadoAutenticar.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage,
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  autenticar,
  cadastrar,
};

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

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
  autenticar,
  cadastrar,
};
