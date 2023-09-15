import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, pokeSearch}) {

  console.log(pokemon)

  const pokeFind = pokemon.filter((poke) => {
    if (poke.name.toLowerCase().includes(pokeSearch.toLowerCase())) {
      return true
    } else {
      return false
    }
  })

  const createCards = pokeFind.map((poke) => {
    return <PokemonCard key={poke.id} names={poke.name} hp={poke.hp} frontImgs={poke.sprites.front} backImgs={poke.sprites.back} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {createCards}
    </Card.Group>
  );
}

export default PokemonCollection;
