Create database academia;
use academia;

CREATE TABLE usuario (
  idusuario INT NOT NULL auto_increment ,
  Email VARCHAR(100) NULL,
  Nome VARCHAR(55) NULL,
  Senha varchar(30) NULL,
  PRIMARY KEY (idusuario)
);

CREATE TABLE Academia (
  idAcademia INT NOT NULL,
  nome VARCHAR(45) NULL,
  descricao VARCHAR(255) NULL,
  PRIMARY KEY (idAcademia)
);
INSERT INTO Academia (idAcademia, nome, descricao) VALUES (1, 'Academia XYZ', 'Academia de musculação e condicionamento físico');


CREATE TABLE Treinos (
  idTreinos INT NOT NULL,
  nomeTreino VARCHAR(50) NULL,
  PRIMARY KEY (idTreinos)
);

CREATE TABLE Formulario (
  idFormulario INT NOT NULL,
  fkIdusuario INT NOT NULL,
  sexo VARCHAR(45) NULL,
  fkIdAcademia INT NOT NULL,
  avaliacao int NULL,
  fkIdTreinos INT NOT NULL,
  PRIMARY KEY (idFormulario),
    FOREIGN KEY (fkIdusuario) REFERENCES usuario (idusuario),
    FOREIGN KEY (fkIdAcademia) REFERENCES Treinos (idTreinos),
    FOREIGN KEY (fkIdTreinos) REFERENCES Academia (idAcademia)
);

CREATE TABLE Rotina (
    idrotina INT NOT NULL,
    nome VARCHAR(45) NULL,
    descricao VARCHAR(45) NULL,
    fkidusuario INT NOT NULL,
    PRIMARY KEY (idrotina),
    FOREIGN KEY (fkidusuario) REFERENCES usuario (idusuario)
);

select * from usuario;

SELECT idusuario, email, nome, senha FROM usuario;

use aquatech;

select * from usuario;

