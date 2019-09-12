import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterPokemonsAction } from '../actions';
import PokemonList from './PokemonList';
import SearchBar from './SearchBar';

const PokemonFilterList = ({ filterPokemons }) => (
  <div>
    <SearchBar onTermChange={filterPokemons} />
    <PokemonList />
  </div>
);

PokemonFilterList.propTypes = {
  filterPokemons: PropTypes.func.isRequired,
};

export default connect(
  null,
  { filterPokemons: filterPokemonsAction },
)(PokemonFilterList);
