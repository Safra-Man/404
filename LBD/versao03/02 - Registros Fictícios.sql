-- Carga Endereços
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18047000','Av. Dom Aguirre','500',NULL,'Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18045003','Rua Aparecida','120',NULL,'Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18013020','Av. Barão de Tatuí','850','Apto 12','Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18076000','Rua Atanásio Soares','300',NULL,'Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18090020','Av. Dr. Armando Pannunzio','1000',NULL,'Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18025000','Rua Souza Pereira','250','Bloco B','Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18035490','Rua José Martins','55',NULL,'Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18055200','Rua Sadrac Arruda','40',NULL,'Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18017000','Rua da Penha','700','Apto 33','Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18105010','Rua Nove de Julho','210',NULL,'Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18030135','Rua Antônio Aparecido','78',NULL,'Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18052030','Rua Padre Madureira','180',NULL,'Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18076190','Rua Manoel Lopes','310',NULL,'Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18070000','Av. Ipanema','2000',NULL,'Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18087035','Rua Mário Vieira','60','Apto 14','Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18065180','Rua dos Andradas','501',NULL,'Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18051000','Rua Hermelino Matarazzo','95',NULL,'Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18017285','Rua XV de Novembro','320','Sobrado','Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18078005','Rua Líbero Badaró','150',NULL,'Sorocaba','SP');
INSERT INTO public.endereco(cep, logradouro, numero, complemento, cidade, estado) VALUES ('18048007','Rua do Rosário','410','Apto 22','Sorocaba','SP');


-- Carga Usuários
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('joao.silva@fatec.sp.gov.br','1234','João da Silva','João',DATE '1998-03-15','Masculino',DATE '2024-01-10','N',1);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('maria.souza@fatec.sp.gov.br','1234','Maria Souza','Mah',DATE '1995-07-09','Feminino',DATE '2024-01-11','N',2);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('pedro.almeida@fatec.sp.gov.br','1234','Pedro Almeida','Peu',DATE '1989-11-21','Masculino',DATE '2024-01-12','S',3);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('ana.santos@fatec.sp.gov.br','1234','Ana Santos','Aninha',DATE '2003-09-04','Feminino',DATE '2024-01-10','N',4);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('lucas.oliveira@fatec.sp.gov.br','1234','Lucas Oliveira','Lu',DATE '1990-02-10','Masculino',DATE '2024-01-15','N',5);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('beatriz.pires@fatec.sp.gov.br','1234','Beatriz Pires','Bia',DATE '1997-12-22','Feminino',DATE '2024-01-19','N',6);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('vinicius.lima@fatec.sp.gov.br','1234','Vinicius Lima',NULL,DATE '1996-08-07','Masculino',DATE '2024-01-14','N',7);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('carla.moraes@fatec.sp.gov.br','1234','Carla Moraes','Cacá',DATE '2000-04-18','Feminino',DATE '2024-01-16','N',8);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('rafael.rocha@fatec.sp.gov.br','1234','Rafael Rocha','Rafa',DATE '1992-01-26','Masculino',DATE '2024-01-20','N',9);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('juliana.machado@fatec.sp.gov.br','1234','Juliana Machado','Juli',DATE '1998-05-29','Feminino',DATE '2024-01-22','N',10);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('thiago.ramos@fatec.sp.gov.br','1234','Thiago Ramos',NULL,DATE '1993-09-11','Masculino',DATE '2024-01-23','N',11);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('patricia.araujo@fatec.sp.gov.br','1234','Patrícia Araújo','Paty',DATE '1988-06-05','Feminino',DATE '2024-01-24','N',12);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('fernando.cardoso@fatec.sp.gov.br','1234','Fernando Cardoso','Nando',DATE '2002-01-01','Masculino',DATE '2024-01-25','N',13);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('priscila.mendes@fatec.sp.gov.br','1234','Priscila Mendes','Pri',DATE '1994-12-14','Feminino',DATE '2024-01-26','N',14);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('andre.costa@fatec.sp.gov.br','1234','André Costa','Deco',DATE '1991-02-28','Masculino',DATE '2024-01-27','N',15);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('camila.ferreira@fatec.sp.gov.br','1234','Camila Ferreira','Camis',DATE '2004-03-19','Feminino',DATE '2024-01-28','N',16);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('diego.souza@fatec.sp.gov.br','1234','Diego Souza',NULL,DATE '1999-11-30','Masculino',DATE '2024-01-29','N',17);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('aline.martins@fatec.sp.gov.br','1234','Aline Martins','Lili',DATE '1997-08-14','Feminino',DATE '2024-01-30','N',18);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('gabriel.dias@fatec.sp.gov.br','1234','Gabriel Dias','Biel',DATE '1990-10-03','Masculino',DATE '2024-01-31','N',19);
INSERT INTO public.usuario(emailfatec, senha, nomecompleto, apelido, datanascimento, genero, datacadastro, administrador, idendereco) VALUES ('sabrina.moreira@fatec.sp.gov.br','1234','Sabrina Moreira','Sá',DATE '2001-07-22','Feminino',DATE '2024-02-01','N',20);


-- Carga Contatos
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0001','joao.contato@gmail.com',1);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0002','maria.contato@gmail.com',2);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0003','pedro.contato@gmail.com',3);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0004','ana.contato@gmail.com',4);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0005','lucas.contato@gmail.com',5);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0006','bia.contato@gmail.com',6);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0007','vinicius.contato@gmail.com',7);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0008','carla.contato@gmail.com',8);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0009','rafael.contato@gmail.com',9);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0010','juliana.contato@gmail.com',10);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0011','thiago.contato@gmail.com',11);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0012','paty.contato@gmail.com',12);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0013','nando.contato@gmail.com',13);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0014','pri.contato@gmail.com',14);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0015','deco.contato@gmail.com',15);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0016','camis.contato@gmail.com',16);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0017','diego.contato@gmail.com',17);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0018','lili.contato@gmail.com',18);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0019','biel.contato@gmail.com',19);
INSERT INTO public.contato(telefone, emailcontato, idusuario) VALUES ('(15)99100-0020','sab.contato@gmail.com',20);


-- Carga Carona
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (3,'Fatec Sorocaba',TO_DATE('2025-11-15 18:00','YYYY-MM-DD HH24:MI'),DATE '2025-11-10','Filantropica','Saindo do Campolim',1,1);
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (1,'Terminal São Paulo',TO_DATE('2025-11-15 06:50','YYYY-MM-DD HH24:MI'),DATE '2025-11-10','Filantropica','Passo pela General Osório',4,4);
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (3,'Fatec Sorocaba',TO_DATE('2025-11-16 20:10','YYYY-MM-DD HH24:MI'),DATE '2025-11-12','Filantropica','Saindo do centro',6,6);
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (2,'Vila Hortência',TO_DATE('2025-11-17 07:40','YYYY-MM-DD HH24:MI'),DATE '2025-11-10','Filantropica','Trajeto diário',7,7);
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (3,'Zona Norte',TO_DATE('2025-11-18 08:00','YYYY-MM-DD HH24:MI'),DATE '2025-11-13','Filantropica','Próximo ao Carrefour',8,8);
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (1,'Éden',TO_DATE('2025-11-16 08:30','YYYY-MM-DD HH24:MI'),DATE '2025-11-12','Filantropica','Caminho da Castelo Branco',10,10);
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (2,'Aeroporto de Sorocaba',TO_DATE('2025-11-22 05:40','YYYY-MM-DD HH24:MI'),DATE '2025-11-15','Filantropica','Passo pelo centro',15,15);
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (2,'Fatec',TO_DATE('2025-11-26 18:00','YYYY-MM-DD HH24:MI'),DATE '2025-11-10','Filantropica','Saindo do Éden',1,5);
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (2,'Terminal Vitória Régia',TO_DATE('2025-11-29 08:40','YYYY-MM-DD HH24:MI'),DATE '2025-11-13','Filantropica','Trajeto rápido',7,2);
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (3,'Shopping Cidade',TO_DATE('2025-11-30 20:00','YYYY-MM-DD HH24:MI'),DATE '2025-11-12','Filantropica','Cinema',8,9);
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (2,'Centro',TO_DATE('2025-12-03 07:50','YYYY-MM-DD HH24:MI'),DATE '2025-11-14','Filantropica','Dia útil',13,14);
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (1,'Iguatemi',TO_DATE('2025-11-19 20:15','YYYY-MM-DD HH24:MI'),DATE '2025-11-12','Igualitaria','Sem pressa',17,18);
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (4,'Fatec',TO_DATE('2025-11-20 18:00','YYYY-MM-DD HH24:MI'),DATE '2025-11-15','Igualitaria','Turma da noite',19,20);
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (2,'Terminal São Paulo',TO_DATE('2025-11-21 07:50','YYYY-MM-DD HH24:MI'),DATE '2025-11-14','Igualitaria','Carona fixa',20,1);
INSERT INTO public.carona(vagas, destino, datahorapartida, datacadastro, tipocarona, descricao, idusuario, idendereco) VALUES (2,'Vila Hortência',TO_DATE('2025-11-24 07:25','YYYY-MM-DD HH24:MI'),DATE '2025-11-10','Igualitaria','Caminho da escola',6,7);


-- Carga Notificação
INSERT INTO public.notificacao(mensagem, dataenvio, statusleitura, idusuario) VALUES ('Sua carona foi confirmada!', DATE '2025-11-10', 'N', 1);
INSERT INTO public.notificacao(mensagem, dataenvio, statusleitura, idusuario) VALUES ('Novo item próximo ao seu endereço.', DATE '2025-11-11', 'S', 3);
INSERT INTO public.notificacao(mensagem, dataenvio, statusleitura, idusuario) VALUES ('Alguém encontrou um item semelhante ao seu perdido.', DATE '2025-11-13', 'N', 7);
INSERT INTO public.notificacao(mensagem, dataenvio, statusleitura, idusuario) VALUES ('Obrigado por utilizar o app de mobilidade!', DATE '2025-11-14', 'S', 12);
INSERT INTO public.notificacao(mensagem, dataenvio, statusleitura, idusuario) VALUES ('Sua denúncia foi registrada com sucesso.', DATE '2025-11-14', 'N', 15);


-- Carga Denuncia
INSERT INTO public.denuncia(descricao, data, imagem, idusuario) VALUES ('Usuário oferecendo carona falsa para obter dinheiro.', DATE '2025-11-09', NULL, 5);
INSERT INTO public.denuncia(descricao, data, imagem, idusuario) VALUES ('Conduta agressiva durante carona.', DATE '2025-11-10', NULL, 11);
INSERT INTO public.denuncia(descricao, data, imagem, idusuario) VALUES ('Conduta idiota durante carona.', DATE '2025-11-12', NULL, 19);


-- Carga Achados
INSERT INTO public.achadosperdidos(titulo, descricao, datacadastro, local, foto, quando, status, idusuario) VALUES ('Carteira marrom', 'Carteira encontrada na cantina', DATE '2025-11-15', 'Cantina', NULL, DATE '2025-11-15', 'A', 2);
INSERT INTO public.achadosperdidos(titulo, descricao, datacadastro, local, foto, quando, status, idusuario) VALUES ('Celular iPhone', 'Celular perdido no laboratório de informática', DATE '2025-11-16', 'Laboratório de informática', NULL, DATE '2025-11-16', 'A', 5);
INSERT INTO public.achadosperdidos(titulo, descricao, datacadastro, local, foto, quando, status, idusuario) VALUES ('Chave do portão', 'Chave encontrada próximo ao estacionamento', DATE '2025-11-17', 'Estacionamento', NULL, DATE '2025-11-17', 'I', 8);
INSERT INTO public.achadosperdidos(titulo, descricao, datacadastro, local, foto, quando, status, idusuario) VALUES ('Mochila vermelha', 'Mochila esquecida na biblioteca', DATE '2025-11-18', 'Biblioteca', NULL, DATE '2025-11-18', 'A', 10);
INSERT INTO public.achadosperdidos(titulo, descricao, datacadastro, local, foto, quando, status, idusuario) VALUES ('Óculos escuros', 'Óculos deixados na recepção', DATE '2025-11-19', 'Recepção', NULL, DATE '2025-11-19', 'A', 12);
INSERT INTO public.achadosperdidos(titulo, descricao, datacadastro, local, foto, quando, status, idusuario) VALUES ('Relógio prata', 'Relógio encontrado no corredor do bloco C', DATE '2025-11-21', 'Bloco C', NULL, DATE '2025-11-21', 'A', 14);
INSERT INTO public.achadosperdidos(titulo, descricao, datacadastro, local, foto, quando, status, idusuario) VALUES ('Livro de física', 'Livro esquecido na sala 101', DATE '2025-11-23', 'Sala 101', NULL, DATE '2025-11-23', 'I', 15);
INSERT INTO public.achadosperdidos(titulo, descricao, datacadastro, local, foto, quando, status, idusuario) VALUES ('Cartão de crédito', 'Cartão encontrado próximo ao portão principal', DATE '2025-11-25', 'Portão principal', NULL, DATE '2025-11-25', 'A', 16);
INSERT INTO public.achadosperdidos(titulo, descricao, datacadastro, local, foto, quando, status, idusuario) VALUES ('Fones Bluetooth', 'Fones esquecidos na cantina', DATE '2025-11-27', 'Cantina', NULL, DATE '2025-11-27', 'A', 18);
INSERT INTO public.achadosperdidos(titulo, descricao, datacadastro, local, foto, quando, status, idusuario) VALUES ('Guarda-chuva azul', 'Guarda-chuva deixado na sala de estudos', DATE '2025-11-29', 'Sala de estudos', NULL, DATE '2025-11-29', 'A', 20);


SELECT 'Endereco' TIPO, count(*) QTD FROM endereco UNION ALL
SELECT 'Usuario' TIPO, count(*) QTD FROM usuario UNION ALL
SELECT 'Carona' TIPO, count(*) QTD FROM carona UNION ALL
SELECT 'Contato' TIPO, count(*) QTD FROM contato UNION ALL
SELECT 'Notificacao' TIPO, count(*) QTD FROM notificacao UNION ALL
SELECT 'Achados' TIPO, count(*) QTD FROM achadosperdidos UNION ALL
SELECT 'Denuncia' TIPO, count(*) QTD FROM denuncia;
