import React from 'react';
import PropTypes from 'prop-types';

import './PokemonItem.css';

const PokemonItem = ({ pokemon }) => (
  <div key={pokemon.id} className="pokemon-item item">
    <img
      className="ui image"
      alt={pokemon.name}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
    />
    <div className="content">
      <div className="header">{pokemon.name}</div>
    </div>
  </div>
);

PokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonItem;
