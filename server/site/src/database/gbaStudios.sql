CREATE DATABASE gbaStudios;
USE gbaStudios;

-- -----------------------------------------------------
-- Table usuario
-- -----------------------------------------------------
CREATE TABLE usuario (
  idUsuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(70),
  email VARCHAR(45) UNIQUE,
  senha VARCHAR(16),
  nivelConhecimento INT,
  fkAdm INT(11),
  PRIMARY KEY (idUsuario),
  FOREIGN KEY (fkAdm) REFERENCES usuario(idUsuario)
);

insert into usuario values (null, 'gba.exe', 'gabriel.araujo1805@hotmail.com', '1206', 4, null);
insert into usuario values (null, 'Clara', 'maria.clara@hotmail.com', '1206', 1, 1);
insert into usuario values (null, 'gigi.exe', 'giovanna.rodrigues@hotmail.com', '12345678', 2, 1);
insert into usuario values (null, 'Hideki', 'vitor.nakamura@hotmail.com', '12345678', 2, 1);
insert into usuario values (null, 'Nz', 'nicolas.zanardi@hotmail.com', '12345678', 3, 1);
insert into usuario values (null, 'Babi', 'barbara.barbato@hotmail.com', '12345678', 3, 1);
insert into usuario values (null, 'Kauan', 'kauan.rodrigues@hotmail.com', '12345678', 1, 1);

-- -----------------------------------------------------
-- Table endereco
-- -----------------------------------------------------
CREATE TABLE endereco (
  idEndereco INT(11) NOT NULL AUTO_INCREMENT,
  cep CHAR(9),
  rua VARCHAR(45),
  numero INT(11),
  complemento VARCHAR(45),
  bairro VARCHAR(45),
  cidade VARCHAR(45),
  estado CHAR(2),
  fkUsuario INT(11) NOT NULL UNIQUE,
  PRIMARY KEY (idEndereco),
  FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);


-- -----------------------------------------------------
-- Table login
-- -----------------------------------------------------
CREATE TABLE  login (
  fkUsuario INT(11) NOT NULL AUTO_INCREMENT,
  dataLogin DATETIME NOT NULL,
  PRIMARY KEY (fkUsuario, dataLogin),
  FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

insert into login values (1, '2023-05-18,09:30'),
						 (2, '2023-05-06,09:30'),
						 (2, '2023-05-07,11:30'),
						 (3, '2023-06-08,20:30'),
						 (4, '2023-06-08,20:30'),
						 (5, '2023-06-01,20:30'),
						 (6, '2023-06-10,20:30'),
						 (7, '2023-06-10,20:30');
