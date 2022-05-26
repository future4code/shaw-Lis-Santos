// 4.a)

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

/* 4.b) tsc exercicio4.ts / O comando funciona de maneira similar ao cd do terminal, portanto, se pode escrever apenas o nome do arquivo como também seus caminhos.

/* 4.c) É possível transpilar mais de um arquivo por vez diretamente pelo terminal, rodando o tsc e nomeando os arquivos que se deseja transpilar, separando por expaços. Ou ainda, o comando tsc sem parâmetros, que converte todos os arquivos que estejam com a extensão .ts.*/