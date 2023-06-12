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
