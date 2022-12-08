import app from "./app"
import { PokemonBusiness } from "./business/PokemonBusiness"
import { PokemonController } from "./controller/PokemonController"
import { PokemonDatabase } from "./data/PokemonDatabase"

const pokemonController = new PokemonController(
    new PokemonBusiness(
        new PokemonDatabase
    )
)

app.get("/pokemon", pokemonController.getAllPokemon)
app.get("/pokemon/name/:name", pokemonController.getPokemonByName)
app.get("/pokemon/generation/:generation", pokemonController.getPokemonByGeneration)
app.get("/pokemon/pokedex/:pokedex_number", pokemonController.getPokemonByPokedexNumber)
app.get("/pokemon/type1/:type1", pokemonController.getPokemonByType1)
app.get("/pokemon/type2/:type2", pokemonController.getPokemonByType2)