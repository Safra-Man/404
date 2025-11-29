SELECT * FROM endereco --UNION ALL
SELECT * FROM usuario --UNION ALL
SELECT * FROM carona --UNION ALL
SELECT * FROM notificacao --UNION ALL
SELECT * FROM achadosperdidos --UNION ALL
SELECT * FROM denuncia --;

-- 3. Consultas: Criar consultas significativas para a aplicação, descrevendo o objetivo da consulta. (1,8)
-- a. Uma consulta usando junção de mais de 2 tabelas.
-- Usuários com notificações:
SELECT 
	 u.APELIDO apelido
	,to_char(u.DATANASCIMENTO, 'dd/MM/yyyy') dataNascimento 
	,u.GENERO genero
	,e.LOGRADOURO 
	,e.CIDADE 
	,d.DATA dataDenuncia
	,d.DESCRICAO 
FROM 
	usuario u
INNER JOIN endereco e ON 
	u.IDENDERECO  = e.ID 
INNER JOIN DENUNCIA d ON 
	u.id = d.IDUSUARIO 

-- b. Uma consulta que seja útil para a lógica de negócios usando totalização e uma função de data.
-- Quantidade de caronas disponiveis:
SELECT count(*) qtd FROM CARONA c 
WHERE 
	c.DATACADASTRO + 30 > sysdate	

-- c. Uma consulta usando junção externa left join ou right join
SELECT 
	 u.NOMECOMPLETO 
	,u.EMAILFATEC 
	,CASE 
		WHEN a.id IS NULL THEN 'N'
		ELSE 'S'
	END achadosPerdidos	
FROM 
	USUARIO u 
LEFT JOIN ACHADOSPERDIDOS a ON
	u.id = a.IDUSUARIO 

-- d. Uma consulta usando o operador de União.
-- Quantidade de registros no banco:
SELECT 'Endereco' TIPO, count(*) QTD FROM endereco UNION ALL
SELECT 'Usuario' TIPO, count(*) QTD FROM usuario UNION ALL
SELECT 'Carona' TIPO, count(*) QTD FROM carona UNION ALL
SELECT 'Notificacao' TIPO, count(*) QTD FROM notificacao UNION ALL
SELECT 'Achados' TIPO, count(*) QTD FROM achadosperdidos UNION ALL
SELECT 'Denuncia' TIPO, count(*) QTD FROM denuncia UNION ALL
SELECT 'Total' Tipo, sum(qtd) qtd FROM ( 
	SELECT 'Endereco' TIPO, count(*) QTD FROM endereco UNION ALL
	SELECT 'Usuario' TIPO, count(*) QTD FROM usuario UNION ALL
	SELECT 'Carona' TIPO, count(*) QTD FROM carona UNION ALL
	SELECT 'Notificacao' TIPO, count(*) QTD FROM notificacao UNION ALL
	SELECT 'Achados' TIPO, count(*) QTD FROM achadosperdidos UNION ALL
	SELECT 'Denuncia' TIPO, count(*) QTD FROM denuncia
) total;
	
-- e. Uma consulta usando o operador Minus
-- Relação de usuários com caronas ofertadas
SELECT 
	 u.EMAILFATEC
	,u.DATACADASTRO 
	,u.ADMINISTRADOR 
FROM USUARIO u 
minus
SELECT 
	 u.EMAILFATEC
	,u.DATACADASTRO 
	,u.ADMINISTRADOR 
FROM USUARIO u 
WHERE 
	u.id NOT IN (
		SELECT c.IDUSUARIO FROM CARONA c 
	)

-- f. Uma consulta usando o operador de Interseção (Intersect)
-- Relação de usuários que tem notificações
SELECT 
	 u.id
	,u.EMAILFATEC 
FROM 
	USUARIO u
WHERE
	id IN (	
		SELECT id FROM USUARIO WHERE administrador = 'N'
		intersect
		SELECT idusuario FROM NOTIFICACAO 
	)

-- 4. Subconsultas (sobre o tema escolhido) (2,0)
-- a. exemplo de um comando utilizando subconsultas que utilize o operador in.
-- usuários com registros na tabela de achados e perdidos
SELECT 
	 u.NOMECOMPLETO 
	,u.EMAILFATEC 
	,u.ADMINISTRADOR 
FROM 
	USUARIO u 
WHERE 
	u.id IN (	
		SELECT a.IDUSUARIO  FROM ACHADOSPERDIDOS a 
	)
	
-- b. exemplo de um comando utilizando subconsultas que utilize o operador not exists
-- usuários sem registros na tabela de achados e perdidos
SELECT 
	 u.NOMECOMPLETO 
	,u.EMAILFATEC 
	,u.ADMINISTRADOR 
FROM 
	USUARIO u 
WHERE 
	NOT EXISTS (
		SELECT * FROM ACHADOSPERDIDOS a 
		WHERE
			u.id = a.IDUSUARIO 
	)
	
-- c. exemplo de uma subconsulta utilizada dentro de um comando Update.
-- Essa atualização não será aplicada... foi a única ideia que tivemos... kkkk
-- Não faz sentido essa atualização... kkkk mas atende o que foi pedido -- update com subconsulta
SELECT * FROM NOTIFICACAO n 
WHERE
	n.STATUSLEITURA = 'N'
	AND n.DATAENVIO  < (
		SELECT sysdate - 19 FROM dual
	)

UPDATE NOTIFICACAO n 
SET 
	n.STATUSLEITURA = 'S'
WHERE
	n.STATUSLEITURA = 'N'
	AND n.DATAENVIO  < (
		SELECT sysdate - 19 FROM dual
	)
	
-- d. exemplo de uma subconsulta utilizada dentro de um comando Delete.
SELECT * FROM CARONA 
WHERE
	DATACADASTRO < (
		SELECT sysdate - 19 FROM dual
	)
	
DELETE FROM CARONA 
WHERE
	DATACADASTRO < (
		SELECT sysdate - 19 FROM dual
	)

/*
5. Parte PL/SQL
Esta parte envolve o desenvolvimento de Procedures, UserFunctions e Trigger que implementem lógica necessária 
para atender às regras de negócios de uma aplicação que use a base de dados selecionada. (04 pontos).
Não se esqueça de indicar o objetivo de cada procedimento criado nos itens abaixo.
*/

-- Tabela de log
CREATE TABLE logSistema (
	dataRegistro DATE,
	tabela varchar2(50),
	campo varchar2(50),
	obeservacao varchar(200)
)
	
	
-- a. Escreva uma Stored Procedure que realize algum procedimento que seja útil implementar reuso para a aplicação e indique uma forma de testá-la. (1,0)
-- Atualiza o status de leitura da notificação:
	
CREATE OR REPLACE PROCEDURE SP_ATUALIZA_LEITURA (idNotificacao NUMBER)
AS
BEGIN
	UPDATE notificacao
	SET 
		statusleitura = 'S'
	WHERE
		id = idNotificacao;

    -- Verifica se alguma linha foi atualizada
    IF SQL%ROWCOUNT = 0 THEN
        INSERT INTO logSistema VALUES (
            sysdate, 'notificacao', 'ID', 'Notificação não cadastrada. ID: ' || idNotificacao
        );
    END IF;

EXCEPTION
    WHEN OTHERS THEN
        -- Captura qualquer outro erro inesperado
        INSERT INTO logSistema VALUES (
            sysdate, 'notificacao', 'ERRO', 'Erro ao atualizar notificação. ID: ' || idNotificacao
        );
END;
	
SELECT * FROM notificacao;
SELECT * FROM logSistema;

call SP_ATUALIZA_LEITURA(6);

-- b. Escreva uma função que retorna alguma informação útil para a aplicação e indique uma forma de testá-la. (0,75)
-- Traz a data limite de exibição da oferta de carona
Create or replace Function fn_data_limite_carona (dataCadastro in date) return date 
  as
    p2 date;
 BEGIN
    p2 := dataCadastro + 30;
    Return p2;
 END;

SELECT 
	 u.NOMECOMPLETO 
	,u.EMAILFATEC 
	,c.DATACADASTRO 
	,fn_data_limite_carona(c.DATACADASTRO) dataLimite
FROM carona c
INNER JOIN usuario u ON 
	c.IDUSUARIO  = u.id
	
-- c. Escreva um trigger de auditoria para criação e uso de logs sempre que alguma operação crítica for realizada. Deverá usar :NEW e :OLD.
--	O log gravado deve ter informações que permitam rastrear quem fez a operação,data e dados que permitam identificar a ação. (1,0)
-- Armazena o histórico de atualização das caronas oferecidas
	
-- DROP TABLE historicoCaronas;
CREATE TABLE historicoCaronas (
    id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    dataAtualizacao DATE NOT NULL,
    idCarona NUMBER NOT NULL,
    idUsuario NUMBER NOT NULL,
    -- Dados antigos
    vagasAntigo NUMBER NOT NULL,
    destinoAntigo NVARCHAR2(300) NOT NULL,
    dataHoraPartidaAntigo DATE NOT NULL,
    dataCadastroAntigo DATE NOT NULL,
    tipoCaronaAntigo NVARCHAR2(20) NOT NULL,
    descricaoAntigo NVARCHAR2(300) NOT NULL,
    idEnderecoAntigo NUMBER NOT NULL,
    -- Dados novos
    vagasNovo NUMBER NOT NULL,
    destinoNovo NVARCHAR2(300) NOT NULL,
    dataHoraPartidaNovo DATE NOT NULL,
    dataCadastroNovo DATE NOT NULL,
    tipoCaronaNovo NVARCHAR2(20) NOT NULL,
    descricaoNovo NVARCHAR2(300) NOT NULL,
    idEnderecoNovo NUMBER NOT NULL
);

CREATE OR REPLACE TRIGGER trg_caronaHistorico
BEFORE UPDATE ON carona
for each ROW
BEGIN
	INSERT INTO historicoCaronas (
	    dataAtualizacao,idCarona,idUsuario,
	    vagasAntigo,destinoAntigo,dataHoraPartidaAntigo,dataCadastroAntigo,tipoCaronaAntigo,descricaoAntigo,idEnderecoAntigo,
	    vagasNovo,destinoNovo,dataHoraPartidaNovo,dataCadastroNovo,tipoCaronaNovo,descricaoNovo,idEnderecoNovo	
	) VALUES (
		sysdate, :OLD.id, :OLD.idusuario,
		:OLD.vagas,:OLD.destino,:OLD.dataHoraPartida,:OLD.dataCadastro,:OLD.tipoCarona,:OLD.descricao,:OLD.idEndereco,
		:new.vagas,:new.destino,:new.dataHoraPartida,:new.dataCadastro,:new.tipoCarona,:new.descricao,:new.idEndereco
	);
END;

SELECT * FROM carona;
SELECT * FROM historicoCaronas;

UPDATE carona
SET 
	 DATAHORAPARTIDA = TO_DATE('25/12/2025 15:00:00', 'DD/MM/YYYY HH24:MI:SS')
	,tipocarona = 'Igualitaria'
	,vagas = 2
WHERE
	id = 1;

-- d. Escreva um trigger para impor uma integridade de dados ou consistência de dados mais complexa do que uma restrição Check (1,25)
-- impede o cadastro de uma carona com data anterior a data atual
CREATE OR REPLACE TRIGGER trg_validaDataCarona
BEFORE INSERT OR UPDATE ON carona
FOR EACH ROW
BEGIN
    -- Regra: data da carona deve ser futura
    IF :NEW.dataHoraPartida < SYSDATE THEN
        -- grava no logSistema
        INSERT INTO logSistema (dataRegistro, tabela, campo, obeservacao)
        VALUES (
            SYSDATE,
            'carona',
            'dataHoraPartida',
            'Tentativa de inserir/atualizar carona com data no passado. ID: ' || :NEW.id
        );
    END IF;
END;

SELECT * FROM logSistema

INSERT INTO carona VALUES (50,2,'Vila Hortência',TO_DATE('2025-11-24 07:25','YYYY-MM-DD HH24:MI'),DATE '2025-11-10','Igualitaria','Caminho da escola',6,7);

UPDATE carona
SET 
	 DATAHORAPARTIDA = TO_DATE('25/11/2025 15:00:00', 'DD/MM/YYYY HH24:MI:SS')
	,tipocarona = 'Igualitaria'
	,vagas = 4
WHERE
	id = 50;

commit