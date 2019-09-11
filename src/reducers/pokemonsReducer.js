export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POKEMONS':

      return (
        action.payload.map((pokemon) => (
          {
            name: pokemon.name,
            id: pokemon.url.substring(34, pokemon.url.length - 1),
          }
        ))
      );
    default:
      return state;
  }
};
