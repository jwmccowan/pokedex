import pokemonAPI from '../apis/pokemon';

export const fetchPokemonsAction = () => async (dispatch) => {
  const response = await pokemonAPI.get('/pokemon',
    {
      params: {
        limit: 151,
      },
    });

  dispatch({ type: 'FETCH_POKEMONS', payload: response.data.results });
};

export const filterPokemonsAction = (term) => (
  {
    type: 'FILTER_POKEMONS',
    payload: { term },
  }
);
