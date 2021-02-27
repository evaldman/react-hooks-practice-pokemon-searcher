import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  const thisPokemon = pokemon.map((poke) => {
    return (
    <PokemonCard poke = {poke} key = {poke.id}/>
    )
  })
  return (
    <Card.Group itemsPerRow={6}>
     
      
      {thisPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
