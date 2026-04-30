/*
 DROP TABLE IF EXISTS carona;
 DROP TABLE IF EXISTS achadosPerdidos;
 DROP TABLE IF EXISTS notificacao;
 DROP TABLE IF EXISTS denuncia;
 DROP TABLE IF EXISTS contato;
 DROP TABLE IF EXISTS usuario;
 DROP TABLE IF EXISTS endereco;
*/

-- Criação das tabelas

CREATE TABLE endereco (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cep VARCHAR(8) NOT NULL,
    logradouro VARCHAR(200) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    complemento VARCHAR(200),
    cidade VARCHAR(200) NOT NULL,
    estado VARCHAR(2) NOT NULL
);

CREATE TABLE usuario (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    emailFatec VARCHAR(50) NOT NULL,
    senha VARCHAR(30) NOT NULL,
    nomeCompleto VARCHAR(200) NOT NULL,
    apelido VARCHAR(50),
    dataNascimento DATE NOT NULL,
    genero VARCHAR(30),
    dataCadastro DATE NOT NULL,
    administrador CHAR(1) NOT NULL,
    idEndereco INTEGER,
    CONSTRAINT FK_USUARIO_ENDERECO
        FOREIGN KEY (idEndereco) REFERENCES endereco(id)
);

CREATE TABLE contato (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    telefone VARCHAR(15),
    emailContato VARCHAR(50) NOT NULL,
    idUsuario INTEGER,
    CONSTRAINT FK_CONTATO_USUARIO
        FOREIGN KEY (idUsuario) REFERENCES usuario(id)
);

CREATE TABLE denuncia (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    descricao VARCHAR(300) NOT NULL,
    data DATE NOT NULL,
    imagem BYTEA,
    idUsuario INTEGER NOT NULL,
    CONSTRAINT FK_DENUNCIA_USUARIO
        FOREIGN KEY (idUsuario) REFERENCES usuario(id)
);

CREATE TABLE notificacao (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    mensagem VARCHAR(300) NOT NULL,
    dataEnvio DATE NOT NULL,
    statusLeitura CHAR(1) NOT NULL,
    idUsuario INTEGER NOT NULL,
    CONSTRAINT FK_NOTIFICACAO_USUARIO
        FOREIGN KEY (idUsuario) REFERENCES usuario(id)
);

CREATE TABLE achadosPerdidos (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descricao VARCHAR(300) NOT NULL,
    dataCadastro DATE NOT NULL,
    local VARCHAR(300) NOT NULL,
    foto BYTEA,
    quando DATE NOT NULL,
    status CHAR(1) NOT NULL,
    idUsuario INTEGER,
    CONSTRAINT FK_ACHADOSPERDIDOS_USUARIO
        FOREIGN KEY (idUsuario) REFERENCES usuario(id)
);

CREATE TABLE carona (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    vagas INTEGER NOT NULL,
    destino VARCHAR(300) NOT NULL,
    dataHoraPartida TIMESTAMP NOT NULL,
    dataCadastro DATE NOT NULL,
    tipoCarona VARCHAR(20) NOT NULL,
    descricao VARCHAR(300) NOT NULL,
    idUsuario INTEGER NOT NULL,
    idEndereco INTEGER NOT NULL,
    CONSTRAINT FK_CARONA_USUARIO
        FOREIGN KEY (idUsuario) REFERENCES usuario(id),
    CONSTRAINT FK_CARONA_ENDERECO
        FOREIGN KEY (idEndereco) REFERENCES endereco(id)
);