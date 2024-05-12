var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM academia WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM academia`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorId, listar };
