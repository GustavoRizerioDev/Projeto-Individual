var database = require("../database/config");

function listar() {
  console.log(
    "ACESSEI O ROTINA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()",
  );
  var instrucaoSql = `
        SELECT 
            r.idRotina AS idRotina,
            r.titulo,
            r.descricao,
            r.fkidusuario,
            u.idusuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM Rotina r
            INNER JOIN usuario u
                ON r.fkidusuario = u.idusuario;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
  console.log(
    "ACESSEI O ROTINA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()",
  );
  var instrucaoSql = `
        SELECT 
            r.idRotina AS idRotina,
            r.titulo,
            r.descricao,
            r.fkidusuario,
            u.idusuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM Rotina r
            INNER JOIN usuario u
                ON r.fkidusuario = u.idusuario
        WHERE r.descricao LIKE '${texto}';
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
  console.log(
    "ACESSEI O ROTINA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()",
  );
  var instrucaoSql = `
        SELECT 
            r.idRotina AS idRotina,
            r.titulo,
            r.descricao,
            r.fkidusuario,
            u.idusuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM Rotina r
            INNER JOIN usuario u
                ON r.fkidusuario = u.idusuario
        WHERE u.idusuario = ${idUsuario};
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, idUsuario) {
  console.log(
    "ACESSEI O ROTINA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ",
    titulo,
    descricao,
    idUsuario,
  );
  var instrucaoSql = `
        INSERT INTO Rotina (titulo, descricao, fkidusuario) VALUES ('${titulo}', '${descricao}', ${idUsuario});
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function editar(novaDescricao, idRotina) {
  console.log(
    "ACESSEI O ROTINA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ",
    novaDescricao,
    idRotina,
  );
  var instrucaoSql = `
        UPDATE Rotina SET descricao = '${novaDescricao}' WHERE idRotina = ${idRotina};
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletar(idRotina) {
  console.log(
    "ACESSEI O ROTINA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():",
    idRotina,
  );
  var instrucaoSql = `
        DELETE FROM Rotina WHERE idRotina = ${idRotina};
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  listar,
  listarPorUsuario,
  pesquisarDescricao,
  publicar,
  editar,
  deletar,
};
