import React, {useEffect, useState} from "react";
import PokemonPage from "./PokemonPage";


function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(response => response.json())
    .then(setPokemon)
  }, [])

  console.log(pokemon)
  return (
    <div className="App">
      <PokemonPage pokemon={pokemon} setPokemon={setPokemon}/>
    </div>
  );
}

export default App;
