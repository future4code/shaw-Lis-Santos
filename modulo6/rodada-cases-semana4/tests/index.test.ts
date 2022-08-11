import { PokemonBusiness } from "../src/business/PokemonBusiness"
import { PokemonDatabaseMock } from "./mocks/PokemonDatabaseMock"
import { pokemon1, pokemon2 } from "./mocks/PokemonMock"

const pokemonBusinessMock = new PokemonBusiness(
    new PokemonDatabaseMock as any
)

describe("tests of pokemon table", () => {
    test("getAllPokemon, sucess", async () => {
        expect.assertions(1)
        try {
            const result = await pokemonBusinessMock.getAllPokemon(1)
            expect(result).toStrictEqual([pokemon1, pokemon2])
        } catch (error: any) {
            console.log(error)
        }
    })
    test("getPokemonByName, sucess", async () => {
        expect.assertions(1)
        try {
            const result = await pokemonBusinessMock.getPokemonByName("Paçoca")
            expect(result).toBe(pokemon1)
        } catch (error: any) {
            console.log(error)
        }
    })
    test("getPokemonByName, empty name parameter", async () => {
        expect.assertions(1)
        try {
            await pokemonBusinessMock.getPokemonByName("")
        } catch (error: any) {
            expect(error.message).toBe("Insira um nome de pokemon")
        }
    })
    test("getPokemonByGeneration, sucess", async () => {
        expect.assertions(1)
        try {
            const result = await pokemonBusinessMock.getPokemonByGeneration(5)
            expect(result).toBe(pokemon2)
        } catch (error: any) {
            console.log(error.message)
        }
    })
    test("getPokemonByGeneration, empty generation parameter", async () => {
        expect.assertions(1)
        try {
            await pokemonBusinessMock.getPokemonByGeneration(0)
        } catch (error: any) {
            expect(error.message).toBe("Insira uma geração")
        }
    })
    test("getPokemonByPokedexNumber, sucess", async () => {
        expect.assertions(1)
        try {
            const result = await pokemonBusinessMock.getPokemonByPokedexNumber(823)
            expect(result).toBe(pokemon1)
        } catch (error: any) {
            console.log(error.message)
        }
    })
    test("getPokemonByPokedexNumber, empty pokedex_number parameter", async () => {
        expect.assertions(1)
        try {
            await pokemonBusinessMock.getPokemonByPokedexNumber(0)
        } catch (error: any) {
            expect(error.message).toBe("Insira um número de pokedex para buscar o pokemon referente")
        }
    })
    test("getPokemonByType1, sucess", async () => {
        expect.assertions(1)
        try {
            const result = await pokemonBusinessMock.getPokemonByType1("poison")
            expect(result).toBe(pokemon2)
        } catch (error: any) {
            console.log(error.message)
        }
    })
    test("getPokemonByType1, empty type1 parameter", async () => {
        expect.assertions(1)
        try {
            await pokemonBusinessMock.getPokemonByType1("")
        } catch (error: any) {
            expect(error.message).toBe("Insira o primeiro tipo do pokemon que deseja buscar")
        }
    })
    test("getPokemonByType2, sucess", async () => {
        expect.assertions(1)
        try {
            const result = await pokemonBusinessMock.getPokemonByType2("grass")
            expect(result).toBe(pokemon2)
        } catch (error: any) {
            console.log(error.message)
        }
    })
    test("getPokemonByType1, empty type2 parameter", async () => {
        expect.assertions(1)
        try {
            await pokemonBusinessMock.getPokemonByType2("")
        } catch (error: any) {
            expect(error.message).toBe("Insira o segundo tipo do pokemon que deseja buscar")
        }
    })
})