##### 1.a)
Concordo. A possibilidade de um ID vir igual quando está setado como string é mais difícil do que a probabilidade de se repetir sendo número.

##### 2.a)
A função de criar usuário é uma função assíncrona que recebe três parâmetros: id, email e senha, os três do tipo string. Com isso, se conecta ao banco de dados através da connection, passando o nome da tabela, e utiliza o insert para adicionar os parâmetros passados em questão.

##### 3.a) 
Garante que o que vai ser passado será do tipo string.

##### 7.a)
Deixa livre a tipagem pois a variável pode ter mais de um tipo/valor.

### Criptografia e User Roles

##### 1.a) 
Round: fator que está relacionado a segurança da senha.
Salt: String aleatória com 22 caracteres.
Os valores recomendados para o round depende da segurança que se quer dar a senha, porém quanto maior o cost, maior também será o tempo de execução. Usei 12, por ser o padrão na maioria das libs.

##### 2.a) 
O endpoint de cadastro. Pois antes de a pessoa logar em si, ela deve efetuar o cadastro e a senha já deve estar criptografada para ir dessa forma para o banco de dados.