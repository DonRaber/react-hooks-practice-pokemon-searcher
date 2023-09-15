import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon, setPokeCreate, setPokemon}) {

  const [pokeSearch, setPokeSearch] = useState('')


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPokeCreate={setPokeCreate} setPokemon={setPokemon} />
      <br />
      <Search setPokeSearch={setPokeSearch} />
      <br />
      <PokemonCollection pokemon={pokemon} pokeSearch={pokeSearch} />
    </Container>
  );
}

export default PokemonPage;
