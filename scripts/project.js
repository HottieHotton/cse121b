//Global variables
let pokemonList;
let results = document.querySelector("#results");

const getPokemon = async (name) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (response.ok) {
    pokemonList = await response.json();
    return pokemonList;
  }
};

const displayPokemon = async () => {
  results.innerHTML = "<h1>Pokemon:</h1>";
  const name = document.querySelector("#Pokemon").value;
  let pokemon = await getPokemon(name);

  //Abilities Builder
  const abilityNames = pokemon.abilities.map((ability) => ability.ability.name);

  //Stat Builder
  const statsString = pokemon.stats
    .map((stat) => `<strong>${stat.stat.name}:</strong> ${stat.base_stat}`)
    .join("<br>");

  // Extracting height, weight, and types
  const height = pokemon.height / 10; // Dividing by 10 to convert to meters.
  const weight = pokemon.weight / 10; // Dividing by 10 to convert to kilograms.
  const types = pokemon.types.map((type) => type.type.name).join("<br>");

  //Posting to HTML
  results.innerHTML = `
        <h3>${pokemon.name.toUpperCase()}</h3>
        <picture>
        <img src="${pokemon.sprites.other.home.front_default}" alt="${
    pokemon.name
  }">
        </picture>
        <p><h4>Height:</h4> ${height} meters</p>
        <p><h4>Weight:</h4> ${weight} kg</p>
        <p><h4>Types:</h4> ${types}</p><br>
        <p><h3>Abilities:<hr></h3> ${abilityNames.join("<br>")}</p>
        <br>
        <h3>Stats:<hr></h3>
        <p>${statsString}</p>
    `;
};

document.querySelector(`#getPokemon`).addEventListener(`click`, displayPokemon);
