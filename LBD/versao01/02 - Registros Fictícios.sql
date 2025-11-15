-- Carga Endereços
INSERT INTO endereco VALUES (1,'18047000','Av. Dom Aguirre','500',NULL,'Sorocaba','SP');
INSERT INTO endereco VALUES (2,'18045003','Rua Aparecida','120',NULL,'Sorocaba','SP');
INSERT INTO endereco VALUES (3,'18013020','Av. Barão de Tatuí','850','Apto 12','Sorocaba','SP');
INSERT INTO endereco VALUES (4,'18076000','Rua Atanásio Soares','300',NULL,'Sorocaba','SP');
INSERT INTO endereco VALUES (5,'18090020','Av. Dr. Armando Pannunzio','1000',NULL,'Sorocaba','SP');
INSERT INTO endereco VALUES (6,'18025000','Rua Souza Pereira','250','Bloco B','Sorocaba','SP');
INSERT INTO endereco VALUES (7,'18035490','Rua José Martins','55',NULL,'Sorocaba','SP');
INSERT INTO endereco VALUES (8,'18055200','Rua Sadrac Arruda','40',NULL,'Sorocaba','SP');
INSERT INTO endereco VALUES (9,'18017000','Rua da Penha','700','Apto 33','Sorocaba','SP');
INSERT INTO endereco VALUES (10,'18105010','Rua Nove de Julho','210',NULL,'Sorocaba','SP');
INSERT INTO endereco VALUES (11,'18030135','Rua Antônio Aparecido','78',NULL,'Sorocaba','SP');
INSERT INTO endereco VALUES (12,'18052030','Rua Padre Madureira','180',NULL,'Sorocaba','SP');
INSERT INTO endereco VALUES (13,'18076190','Rua Manoel Lopes','310',NULL,'Sorocaba','SP');
INSERT INTO endereco VALUES (14,'18070000','Av. Ipanema','2000',NULL,'Sorocaba','SP');
INSERT INTO endereco VALUES (15,'18087035','Rua Mário Vieira','60','Apto 14','Sorocaba','SP');
INSERT INTO endereco VALUES (16,'18065180','Rua dos Andradas','501',NULL,'Sorocaba','SP');
INSERT INTO endereco VALUES (17,'18051000','Rua Hermelino Matarazzo','95',NULL,'Sorocaba','SP');
INSERT INTO endereco VALUES (18,'18017285','Rua XV de Novembro','320','Sobrado','Sorocaba','SP');
INSERT INTO endereco VALUES (19,'18078005','Rua Líbero Badaró','150',NULL,'Sorocaba','SP');
INSERT INTO endereco VALUES (20,'18048007','Rua do Rosário','410','Apto 22','Sorocaba','SP');
COMMIT;

-- Carga Usuários
INSERT INTO usuario VALUES (1,'joao.silva@fatec.sp.gov.br','1234','João da Silva','João',DATE '1998-03-15','Masculino',DATE '2024-01-10','N',1);
INSERT INTO usuario VALUES (2,'maria.souza@fatec.sp.gov.br','1234','Maria Souza','Mah',DATE '1995-07-09','Feminino',DATE '2024-01-11','N',2);
INSERT INTO usuario VALUES (3,'pedro.almeida@fatec.sp.gov.br','1234','Pedro Almeida','Peu',DATE '1989-11-21','Masculino',DATE '2024-01-12','S',3);
INSERT INTO usuario VALUES (4,'ana.santos@fatec.sp.gov.br','1234','Ana Santos','Aninha',DATE '2003-09-04','Feminino',DATE '2024-01-10','N',4);
INSERT INTO usuario VALUES (5,'lucas.oliveira@fatec.sp.gov.br','1234','Lucas Oliveira','Lu',DATE '1990-02-10','Masculino',DATE '2024-01-15','N',5);
INSERT INTO usuario VALUES (6,'beatriz.pires@fatec.sp.gov.br','1234','Beatriz Pires','Bia',DATE '1997-12-22','Feminino',DATE '2024-01-19','N',6);
INSERT INTO usuario VALUES (7,'vinicius.lima@fatec.sp.gov.br','1234','Vinicius Lima',NULL,DATE '1996-08-07','Masculino',DATE '2024-01-14','N',7);
INSERT INTO usuario VALUES (8,'carla.moraes@fatec.sp.gov.br','1234','Carla Moraes','Cacá',DATE '2000-04-18','Feminino',DATE '2024-01-16','N',8);
INSERT INTO usuario VALUES (9,'rafael.rocha@fatec.sp.gov.br','1234','Rafael Rocha','Rafa',DATE '1992-01-26','Masculino',DATE '2024-01-20','N',9);
INSERT INTO usuario VALUES (10,'juliana.machado@fatec.sp.gov.br','1234','Juliana Machado','Juli',DATE '1998-05-29','Feminino',DATE '2024-01-22','N',10);
INSERT INTO usuario VALUES (11,'thiago.ramos@fatec.sp.gov.br','1234','Thiago Ramos',NULL,DATE '1993-09-11','Masculino',DATE '2024-01-23','N',11);
INSERT INTO usuario VALUES (12,'patricia.araujo@fatec.sp.gov.br','1234','Patrícia Araújo','Paty',DATE '1988-06-05','Feminino',DATE '2024-01-24','N',12);
INSERT INTO usuario VALUES (13,'fernando.cardoso@fatec.sp.gov.br','1234','Fernando Cardoso','Nando',DATE '2002-01-01','Masculino',DATE '2024-01-25','N',13);
INSERT INTO usuario VALUES (14,'priscila.mendes@fatec.sp.gov.br','1234','Priscila Mendes','Pri',DATE '1994-12-14','Feminino',DATE '2024-01-26','N',14);
INSERT INTO usuario VALUES (15,'andre.costa@fatec.sp.gov.br','1234','André Costa','Deco',DATE '1991-02-28','Masculino',DATE '2024-01-27','N',15);
INSERT INTO usuario VALUES (16,'camila.ferreira@fatec.sp.gov.br','1234','Camila Ferreira','Camis',DATE '2004-03-19','Feminino',DATE '2024-01-28','N',16);
INSERT INTO usuario VALUES (17,'diego.souza@fatec.sp.gov.br','1234','Diego Souza',NULL,DATE '1999-11-30','Masculino',DATE '2024-01-29','N',17);
INSERT INTO usuario VALUES (18,'aline.martins@fatec.sp.gov.br','1234','Aline Martins','Lili',DATE '1997-08-14','Feminino',DATE '2024-01-30','N',18);
INSERT INTO usuario VALUES (19,'gabriel.dias@fatec.sp.gov.br','1234','Gabriel Dias','Biel',DATE '1990-10-03','Masculino',DATE '2024-01-31','N',19);
INSERT INTO usuario VALUES (20,'sabrina.moreira@fatec.sp.gov.br','1234','Sabrina Moreira','Sá',DATE '2001-07-22','Feminino',DATE '2024-02-01','N',20);
COMMIT;

-- Carga Contatos
INSERT INTO contato VALUES (1,'(15)99100-0001','joao.contato@gmail.com',1);
INSERT INTO contato VALUES (2,'(15)99100-0002','maria.contato@gmail.com',2);
INSERT INTO contato VALUES (3,'(15)99100-0003','pedro.contato@gmail.com',3);
INSERT INTO contato VALUES (4,'(15)99100-0004','ana.contato@gmail.com',4);
INSERT INTO contato VALUES (5,'(15)99100-0005','lucas.contato@gmail.com',5);
INSERT INTO contato VALUES (6,'(15)99100-0006','bia.contato@gmail.com',6);
INSERT INTO contato VALUES (7,'(15)99100-0007','vinicius.contato@gmail.com',7);
INSERT INTO contato VALUES (8,'(15)99100-0008','carla.contato@gmail.com',8);
INSERT INTO contato VALUES (9,'(15)99100-0009','rafael.contato@gmail.com',9);
INSERT INTO contato VALUES (10,'(15)99100-0010','juliana.contato@gmail.com',10);
INSERT INTO contato VALUES (11,'(15)99100-0011','thiago.contato@gmail.com',11);
INSERT INTO contato VALUES (12,'(15)99100-0012','paty.contato@gmail.com',12);
INSERT INTO contato VALUES (13,'(15)99100-0013','nando.contato@gmail.com',13);
INSERT INTO contato VALUES (14,'(15)99100-0014','pri.contato@gmail.com',14);
INSERT INTO contato VALUES (15,'(15)99100-0015','deco.contato@gmail.com',15);
INSERT INTO contato VALUES (16,'(15)99100-0016','camis.contato@gmail.com',16);
INSERT INTO contato VALUES (17,'(15)99100-0017','diego.contato@gmail.com',17);
INSERT INTO contato VALUES (18,'(15)99100-0018','lili.contato@gmail.com',18);
INSERT INTO contato VALUES (19,'(15)99100-0019','biel.contato@gmail.com',19);
INSERT INTO contato VALUES (20,'(15)99100-0020','sab.contato@gmail.com',20);
COMMIT;

-- Carga Carona
INSERT INTO carona VALUES (1,3,'Fatec Sorocaba',TO_DATE('2025-11-15 18:00','YYYY-MM-DD HH24:MI'),DATE '2025-11-10','Filantropica','Saindo do Campolim',1,1);
INSERT INTO carona VALUES (4,1,'Terminal São Paulo',TO_DATE('2025-11-15 06:50','YYYY-MM-DD HH24:MI'),DATE '2025-11-10','Filantropica','Passo pela General Osório',4,4);
INSERT INTO carona VALUES (6,3,'Fatec Sorocaba',TO_DATE('2025-11-16 20:10','YYYY-MM-DD HH24:MI'),DATE '2025-11-12','Filantropica','Saindo do centro',6,6);
INSERT INTO carona VALUES (7,2,'Vila Hortência',TO_DATE('2025-11-17 07:40','YYYY-MM-DD HH24:MI'),DATE '2025-11-10','Filantropica','Trajeto diário',7,7);
INSERT INTO carona VALUES (8,3,'Zona Norte',TO_DATE('2025-11-18 08:00','YYYY-MM-DD HH24:MI'),DATE '2025-11-13','Filantropica','Próximo ao Carrefour',8,8);
INSERT INTO carona VALUES (10,1,'Éden',TO_DATE('2025-11-16 08:30','YYYY-MM-DD HH24:MI'),DATE '2025-11-12','Filantropica','Caminho da Castelo Branco',10,10);
INSERT INTO carona VALUES (15,2,'Aeroporto de Sorocaba',TO_DATE('2025-11-22 05:40','YYYY-MM-DD HH24:MI'),DATE '2025-11-15','Filantropica','Passo pelo centro',15,15);
INSERT INTO carona VALUES (21,2,'Fatec',TO_DATE('2025-11-26 18:00','YYYY-MM-DD HH24:MI'),DATE '2025-11-10','Filantropica','Saindo do Éden',1,5);
INSERT INTO carona VALUES (27,2,'Terminal Vitória Régia',TO_DATE('2025-11-29 08:40','YYYY-MM-DD HH24:MI'),DATE '2025-11-13','Filantropica','Trajeto rápido',7,2);
INSERT INTO carona VALUES (28,3,'Shopping Cidade',TO_DATE('2025-11-30 20:00','YYYY-MM-DD HH24:MI'),DATE '2025-11-12','Filantropica','Cinema',8,9);
INSERT INTO carona VALUES (33,2,'Centro',TO_DATE('2025-12-03 07:50','YYYY-MM-DD HH24:MI'),DATE '2025-11-14','Filantropica','Dia útil',13,14);
INSERT INTO carona VALUES (37,1,'Iguatemi',TO_DATE('2025-11-19 20:15','YYYY-MM-DD HH24:MI'),DATE '2025-11-12','Igualitaria','Sem pressa',17,18);
INSERT INTO carona VALUES (39,4,'Fatec',TO_DATE('2025-11-20 18:00','YYYY-MM-DD HH24:MI'),DATE '2025-11-15','Igualitaria','Turma da noite',19,20);
INSERT INTO carona VALUES (40,2,'Terminal São Paulo',TO_DATE('2025-11-21 07:50','YYYY-MM-DD HH24:MI'),DATE '2025-11-14','Igualitaria','Carona fixa',20,1);
INSERT INTO carona VALUES (46,2,'Vila Hortência',TO_DATE('2025-11-24 07:25','YYYY-MM-DD HH24:MI'),DATE '2025-11-10','Igualitaria','Caminho da escola',6,7);
COMMIT;

-- Carga Notificação
INSERT INTO notificacao VALUES (1, 'Sua carona foi confirmada!', DATE '2025-11-10', 'N', 1);
INSERT INTO notificacao VALUES (2, 'Novo item próximo ao seu endereço.', DATE '2025-11-11', 'S', 3);
INSERT INTO notificacao VALUES (3, 'Alguém encontrou um item semelhante ao seu perdido.', DATE '2025-11-13', 'N', 7);
INSERT INTO notificacao VALUES (4, 'Obrigado por utilizar o app de mobilidade!', DATE '2025-11-14', 'S', 12);
INSERT INTO notificacao VALUES (5, 'Sua denúncia foi registrada com sucesso.', DATE '2025-11-14', 'N', 15);
COMMIT;

-- Carga Denuncia
INSERT INTO denuncia VALUES (1, 'Usuário oferecendo carona falsa para obter dinheiro.', DATE '2025-11-09', NULL, 5);
INSERT INTO denuncia VALUES (2, 'Conduta agressiva durante carona.', DATE '2025-11-10', NULL, 11);
INSERT INTO denuncia VALUES (3, 'Conduta idiota durante carona.', DATE '2025-11-12', NULL, 19);
COMMIT;


