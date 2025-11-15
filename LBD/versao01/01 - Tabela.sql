/*
 DROP TABLE carona;
 DROP TABLE achadosPerdidos;
 DROP TABLE notificacao;
 DROP TABLE denuncia;
 DROP TABLE contato;
 DROP TABLE usuario;
 DROP TABLE endereco;
 */

-- Criação das tabelas:
CREATE TABLE endereco (
     id NUMBER NOT NULL
    ,cep NVARCHAR2(8) NOT NULL
    ,logradouro NVARCHAR2(200) NOT NULL
    ,numero NVARCHAR2(10) NOT NULL
    ,complemento NVARCHAR2(200)
    ,cidade NVARCHAR2(200) NOT NULL
    ,estado NVARCHAR2(2) NOT NULL
);

CREATE TABLE usuario (
     id NUMBER NOT NULL
    ,emailFatec NVARCHAR2(50) NOT NULL
    ,senha NVARCHAR2(30) NOT NULL
    ,nomeCompleto NVARCHAR2(200) NOT NULL
    ,apelido NVARCHAR2(50)
    ,dataNascimento DATE NOT NULL
    ,genero NVARCHAR2(30)
    ,dataCadastro DATE NOT NULL
    ,administrador CHAR(1) NOT NULL
    ,idEndereco NUMBER
);

CREATE TABLE contato (
     id NUMBER NOT NULL
    ,telefone NVARCHAR2(15)
    ,emailContato NVARCHAR2(50) NOT NULL
    ,idUsuario NUMBER
);

CREATE TABLE denuncia (
     id NUMBER NOT NULL
    ,descricao NVARCHAR2(300) NOT NULL
    ,data DATE NOT NULL
    ,imagem BLOB
    ,idUsuario NUMBER NOT NULL
);

CREATE TABLE notificacao (
     id NUMBER NOT NULL
    ,mensagem NVARCHAR2(300) NOT NULL
    ,dataEnvio DATE NOT NULL
    ,statusLeitura CHAR(1) NOT NULL
    ,idUsuario NUMBER NOT NULL
);

CREATE TABLE achadosPerdidos (
     id NUMBER NOT NULL
    ,titulo NVARCHAR2(150) NOT NULL
    ,descricao NVARCHAR2(300) NOT NULL
    ,dataCadastro DATE NOT NULL
    ,local NVARCHAR2(300) NOT NULL
    ,foto BLOB
    ,quando DATE NOT NULL
    ,status CHAR(1) NOT NULL
    ,idUsuario NUMBER
);

CREATE TABLE carona (
     id NUMBER NOT NULL
    ,vagas NUMBER NOT NULL
    ,destino NVARCHAR2(300) NOT NULL
    ,dataHoraPartida DATE NOT NULL
    ,dataCadastro DATE NOT NULL
    ,tipoCarona NVARCHAR2(20) NOT NULL
    ,descricao NVARCHAR2(300) NOT NULL
    ,idUsuario NUMBER NOT NULL
    ,idEndereco NUMBER NOT NULL
);

-- Criação das chaves primarias e extrangeiras:
ALTER TABLE endereco ADD CONSTRAINT PK_ENDERECO primary key(ID);

ALTER TABLE usuario ADD CONSTRAINT PK_USUARIO primary key(ID);
ALTER TABLE usuario ADD CONSTRAINT FK_USUARIO_ENDERECO FOREIGN KEY (idEndereco) REFERENCES endereco(ID);

ALTER TABLE contato ADD CONSTRAINT PK_CONTATO primary key(ID);
ALTER TABLE contato ADD CONSTRAINT FK_CONTATO_USUARIO FOREIGN KEY (idUsuario) REFERENCES usuario(ID);

ALTER TABLE denuncia ADD CONSTRAINT PK_DENUNCIA primary key(ID);
ALTER TABLE denuncia ADD CONSTRAINT FK_DENUNCIA_USUARIO FOREIGN KEY (idUsuario) REFERENCES usuario(ID);

ALTER TABLE notificacao ADD CONSTRAINT PK_NOTIFICACAO primary key(ID);
ALTER TABLE notificacao ADD CONSTRAINT FK_NOTIFICACAO_USUARIO FOREIGN KEY (idUsuario) REFERENCES usuario(ID);

ALTER TABLE achadosPerdidos ADD CONSTRAINT PK_ACHADOSPERDIDOS primary key(ID);
ALTER TABLE achadosPerdidos ADD CONSTRAINT FK_ACHADOSPERDIDOS_USUARIO FOREIGN KEY (idUsuario) REFERENCES usuario(ID);

ALTER TABLE carona ADD CONSTRAINT PK_CARONA primary key(ID);
ALTER TABLE carona ADD CONSTRAINT FK_CARONA_USUARIO FOREIGN KEY (idUsuario) REFERENCES usuario(ID);
ALTER TABLE carona ADD CONSTRAINT FK_CARONA_ENDERECO FOREIGN KEY (idEndereco) REFERENCES endereco(ID);
