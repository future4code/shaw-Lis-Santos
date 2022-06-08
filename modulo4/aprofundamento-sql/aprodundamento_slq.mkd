
## 1.a) 
ALTER TABLE Actor DROP COLUMN salary: Alterar a tabela excluindo a coluna de salário.

## 1.b)
 ALTER TABLE Actor CHANGE gender sex VARCHAR(6): Alterar o campo 'gender' para 'sex' e o tipo para VARCHAR(6) (string que suporta até 6 caracteres).

##  1.c)  
ALTER TABLE Actor CHANGE gender gender VARCHAR(255): Alterar a tabela mantendo o nome do campo como gender mas modificando o tipo para uma variável que suporta até 233 caracteres.

##  1.d) 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

SET SQL_SAFE_UPDATES = 0;

##  2.a) 
UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "1936-10-05"
WHERE id = "003";

##  2.b) 
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

##  2.c)
UPDATE Actor
SET 
name = "Fernanda Montenegro",
salary = 2000,
birth_date = "1929-10-16",
gender = "female"
WHERE id = "005";

## 2.d)
UPDATE Actor 
SET 
name = "Adriana Esteves"
WHERE id = 8;

-- 0 linha(s) afetada(s) Linha(s) correspondida(s): 0 Alterado: 0 Avisos: 0.

##  3.a)
DELETE FROM Actor
 WHERE name = "Fernanda Montenegro";
 
 ##  3.b) 
 DELETE FROM Actor 
 WHERE gender = "male" AND
 salary > 1000000;


##  4.a)
 SELECT MAX(salary) as maior_salario FROM Actor;
 
 ##  4.b) 
 SELECT MIN(salary) as menor_salario_atriz FROM Actor
 WHERE gender = "female";
 
 ##  4.c)
 SELECT COUNT(*) FROM Actor 
 WHERE gender = "female";
 
 ##  4.d) 
 SELECT SUM(salary) FROM Actor;

##  5.a)
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- Mostra quantas pessoas temos de cada gênero.

##  5.b)
SELECT id, name 
FROM Actor
ORDER BY name DESC;

##  5.c)
SELECT * 
FROM Actor
ORDER BY salary ASC;

##  5.d)
SELECT *
 FROM Actor 
 ORDER BY salary DESC
 LIMIT 3;

##  5.e)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

SELECT * FROM Actor;

##  6.a) 
ALTER TABLE Films 
ADD playing_limit_dates DATE;

##  6.b) 
ALTER TABLE Films
CHANGE evaluation evaluation FLOAT NOT NULL;

DESCRIBE Films;

##  6.c)
UPDATE Films 
SET 
playing_limit_dates = "2022-07-13"
WHERE id = "002";

UPDATE Films
SET
playing_limit_dates = "2022-05-31"
WHERE id = "004";

##  6.d) 
DELETE FROM Films
 WHERE id = "001";
 
 UPDATE Films 
 SET sinopse = "Moradora de uma pequena aldeia francesa, Bela tem o pai capturado pela Fera e decide entregar sua vida ao estranho ser em troca da liberdade do progenitor. No castelo, ela conhece objetos mágicos e descobre que a Fera é na verdade um príncipe que precisa de amor para voltar à forma humana."
 WHERE id = "001";
 
 -- Retorna uma mensagem de sucesso, porém afirma o seguinte: 0 linha(s) afetada(s) Linha(s) correspondida(s): 0 Alterado: 0 Avisos: 0.

SELECT * FROM Films;