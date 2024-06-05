const getPokemonAJAX = () => {
  const xhr = new XMLHttpRequest();
  console.log(`데이터 받기 전 xhr 객체 조회: `);
  console.dir(xhr);
  xhr.open(`GET`, `https://pokeapi.co/api/v2/pokemon/`, true);
  xhr.addEventListener(`load`, () => {
    if (xhr.status === 200) {
      console.log(`데이터 받은 후 xhr 객체 조회:`);
      console.dir(xhr);
      const result = JSON.parse(xhr.responseText);
      console.dir(result);

      const pokemon = result.results;
      console.dir(pokemon);

      const root = document.getElementById(`root`);
      const ul = document.createElement(`ul`);
      pokemon.forEach((pokemon) => {
        const li = document.createElement(`li`);
        li.textContent = pokemon.name;
        ul.appendChild(li);
      });
      root.appendChild(ul);
    }
  });

  xhr.send();
};

getPokemonAJAX();
