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
  idAcademia INT NOT NULL auto_increment,
  nome VARCHAR(45) NULL,
  descricao VARCHAR(255) NULL,
  PRIMARY KEY (idAcademia)
);

INSERT INTO Academia (nome, descricao) VALUES
('Smart Fit', 'Academia com preços acessíveis e equipamentos modernos, oferecendo uma ampla gama de aulas e atividades.'),
('Bio Ritmo', 'Rede de academias com foco em treinamento funcional e variedade de modalidades.'),
('Bodytech', 'Academia premium com equipamentos de última geração e programas de treinamento personalizados.'),
('Academia Gustavo Borges', 'Rede de academias com foco em natação e atividades aquáticas.'),
('Companhia Athletica', 'Academia com diversas modalidades de aulas e treinamentos personalizados.'),
('Academia 4Move', 'Rede de academias com foco em treinamento de alta intensidade.'),
('Alta Energia', 'Academia com ambiente descontraído e variedade de aulas.'),
('Academia Formula', 'Rede de academias com foco em treinamento funcional e nutrição.'),
('Academia Contours', 'Academia voltada para o público feminino, com programas de treinamento específicos.'),
('Blue Fit', 'Rede de academias com preços acessíveis e ambiente descontraído, oferecendo uma variedade de aulas e equipamentos.'),
('Gaviões Fitness', 'Rede de academias com foco em atividades coletivas e motivacionais.');

CREATE TABLE Treinos (
  idTreinos INT NOT NULL auto_increment,
  nomeTreino VARCHAR(50) NULL,
  PRIMARY KEY (idTreinos)
);

INSERT INTO Treinos (nomeTreino) VALUES
('Peito'),
('Tríceps'),
('Bíceps'),
('Costas'),
('Pernas'),
('Ombros'),
('Abdômen'),
('Glúteos');


CREATE TABLE Formulario (
  idFormulario INT NOT NULL auto_increment,
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
    idrotina INT NOT NULL auto_increment,
    nome VARCHAR(45) NULL,
    descricao VARCHAR(45) NULL,
    fkidusuario INT NOT NULL,
    PRIMARY KEY (idrotina),
    FOREIGN KEY (fkidusuario) REFERENCES usuario (idusuario)
);

select * from usuario;
select * from academia;
select * from treinos;



