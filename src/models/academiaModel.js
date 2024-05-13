var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM Academia WHERE idAcademia = '${id}'`;

  return database.executar(instrucaoSql);
}

function listarAcademia() {
  var instrucaoSql = `SELECT * FROM Academia`;

  return database.executar(instrucaoSql);
}

function listarTreinos() {
  var instrucaoSql = `SELECT * FROM Treinos`;

  return database.executar(instrucaoSql);
}

function buscarPorNome(nome) {
  var instrucaoSql = `SELECT * FROM empresa WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

function enviar(fkIdusuario, sexo, fkIdAcademia, avaliacao, fkIdTreinos) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    fkIdusuario,
    sexo,
    fkIdAcademia,
    avaliacao,
    fkIdTreinos,
  );

  var instrucaoSql = `
        INSERT INTO usuario (email, nome, senha) VALUES ('${fkIdusuario}', '${sexo}', '${fkIdAcademia}', '${avaliacao}', '${fkIdTreinos}' );
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = { buscarPorId, listarAcademia, buscarPorNome , enviar, listarTreinos};
