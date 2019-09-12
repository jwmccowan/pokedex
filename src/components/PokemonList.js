import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPokemonsAction } from '../actions';
import PokemonItem from './PokemonItem';

class PokemonList extends React.Component {
  componentDidMount() {
    const { fetchPokemons } = this.props;
    fetchPokemons();
  }

  renderList() {
    const { pokemons } = this.props;
    return pokemons.map((pokemon) => (
      pokemon.filtered
        ? null
        : <PokemonItem key={pokemon.id} pokemon={pokemon} />
    ));
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchPokemons: PropTypes.func.isRequired,
};

const mapPropsToState = ({ pokemons }) => ({ pokemons });

export default connect(
  mapPropsToState,
  { fetchPokemons: fetchPokemonsAction },
)(PokemonList);
