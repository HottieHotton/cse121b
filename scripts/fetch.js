export const getPokemon = async (name) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      let pokemonList = await response.json();
      return pokemonList;
    }
  };