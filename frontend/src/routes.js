import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import history from './history';

import PokemonList from './components/PokemonList';
import Pokedex from './components/Pokedex';

export default function Routes(props) {
 
  return (
    <BrowserRouter >
      <Switch>
      <Route path="/" exact component={PokemonList} />
      <Route path="/Pokedex"  component={Pokedex} />
      </Switch>
    </BrowserRouter>
  );
}