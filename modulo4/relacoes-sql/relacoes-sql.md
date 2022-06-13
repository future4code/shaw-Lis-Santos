## 1

CREATE TABLE Evaluation (
		id VARCHAR(255) PRIMARY KEY,
		comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
		film_id VARCHAR(255),
		FOREIGN KEY (film_id) REFERENCES Films(id)
);

## 1.a) O que referencia uma PRIMARY KEY de outra tabela.

## 1.b)

INSERT INTO Evaluation (id, comment, rate, film_id) 
VALUES (
		"001",
		"Amei!!!!",
		9,
		"004"
);

## 1.c)
INSERT INTO Evaluation (id, comment, rate, film_id) 
VALUES (
		"002",
		"Não recomendo!!!!",
		4,
		"010"
);

-- Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha (`shaw-********-santos`.`Evaluation`, CONSTRAINT `Evaluation_ibfk_1` FOREIGN KEY (`film_id`) REFERENCES `Films` (`id` ))

## 1.d)
ALTER TABLE Films DROP COLUMN evaluation;

## 2

CREATE TABLE MovieCast (
		film_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (film_id) REFERENCES Films(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

SELECT * FROM MovieCast;

## 2.a) Uma tabela de junção (intermediária) para representar a relação N:M (vários para vários), dizendo quais atores estão presentes no filme.

## 2.b) 
	INSERT INTO MovieCast(film_id, actor_id)
	VALUES(
		"004",
		"001"
);

	INSERT INTO MovieCast(film_id, actor_id)
	VALUES(
		"003",
		"002"
);

INSERT INTO MovieCast(film_id, actor_id)
	VALUES(
		"002",
		"006"
);

INSERT INTO MovieCast(film_id, actor_id)
	VALUES(
		"003",
		"007"
);

## 2.c)
INSERT INTO MovieCast(film_id, actor_id)
	VALUES(
		"005",
		"003"
);
SELECT * FROM MovieCast;

-- Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha (`shaw-********-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`film_id`) REFERÊNCIAS `Films` (`id` ))

## 2.d)
DELETE from Actor
 WHERE id = "002";

-- Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`shaw-******-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id` 

## 3
SELECT * FROM Films
INNER JOIN Evaluation ON Films.id = Evaluation.film_id;

## 3.a) Condição para fazer a correspondência certa entre as tabelas.

## 3.b) 
SELECT name, Films.id, rate FROM Films
 INNER JOIN Evaluation ON Films.id = Evaluation.film_id;