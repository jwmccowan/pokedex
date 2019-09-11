import pokemonAPI from '../apis/pokemon';

export const fetchPokemonsAction = () => async (dispatch) => {
  const response = await pokemonAPI.get('/pokemon');

  dispatch({ type: 'FETCH_POKEMONS', payload: response.data.results });
};

export const filterPokemons = () => 'blah';
