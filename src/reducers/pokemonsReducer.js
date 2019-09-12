export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POKEMONS':
      return (
        action.payload.map((pokemon) => (
          {
            name: pokemon.name,
            id: pokemon.url.substring(34, pokemon.url.length - 1),
            filtered: false,
          }
        ))
      );

    case 'FILTER_POKEMONS':
      return (
        state.map((pokemon) => {
          const filtered = pokemon.name.search(
            action.payload.term.toLowerCase(),
          ) === -1;
          return {
            name: pokemon.name,
            id: pokemon.id,
            filtered,
          };
        })
      );

    default:
      return state;
  }
};
