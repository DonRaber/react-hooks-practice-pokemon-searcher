import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({setPokemon}) {


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          const newPokemon = {
            name : e.target.name.value,
            hp : e.target.hp.value,
            sprites : {
              front : e.target.frontUrl.value,
              back : e.target.backUrl.value
            }
          }
          setPokemon(pokemon => [...pokemon, newPokemon])
        }
      }
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
