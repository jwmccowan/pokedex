import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPokemonsAction } from '../actions';

class PokemonList extends React.Component {
  componentDidMount() {
    const { fetchPokemons } = this.props;
    fetchPokemons();
  }

  renderList() {
    const { pokemons } = this.props;
    return pokemons.map((pokemon) => (
      <div key={pokemon.id}>
        <img
          alt={pokemon.name}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        />
        {pokemon.name}
      </div>
    ));
  }

  render() {
    return <div>{this.renderList()}</div>;
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
