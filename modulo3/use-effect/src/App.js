import React, { useState, useEffect } from 'react'
import "./styles.css";
import axios from 'axios'
import PokeCard from './components/PokeCard/PokeCard'


export default function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState('')

  const getAllPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  const OnchangePokename = e => {
    setPokeName(e.target.value)
  }

  return (
    <div className="App">
      <select onChange={OnchangePokename}>
        <option value={''}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  )
}