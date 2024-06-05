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

function enviar(idUsuario, sexo, fkIdAcademia, avaliacao, fkIdTreinos) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    idUsuario,
    sexo,
    fkIdAcademia,
    avaliacao,
    fkIdTreinos,
  );

  var instrucaoSql = `
        INSERT INTO Formulario (fkIdusuario, sexo, fkIdAcademia, avaliacao, fkIdTreinos) VALUES ('${idUsuario}', '${sexo}', '${fkIdAcademia}', '${avaliacao}', '${fkIdTreinos}' );
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUltimasMedidas() {
  var instrucaoSql = `SELECT 
                  u.idusuario as idUsuario,
                  u.Nome AS nome_usuario,
                  f.sexo,
                  a.nome AS nome_academia,
                  f.avaliacao,
                  t.nomeTreino
                    FROM 
                    Formulario f
                    INNER JOIN usuario u ON f.fkIdusuario = u.idusuario
                    INNER JOIN Academia a ON f.fkIdAcademia = a.idAcademia
                    INNER JOIN Treinos t ON f.fkIdTreinos = t.idTreinos
                      ORDER BY 
                        f.idFormulario DESC`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarPorId,
  listarAcademia,
  enviar,
  listarTreinos,
  buscarUltimasMedidas,
};
