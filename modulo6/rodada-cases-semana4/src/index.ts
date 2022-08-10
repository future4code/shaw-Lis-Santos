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