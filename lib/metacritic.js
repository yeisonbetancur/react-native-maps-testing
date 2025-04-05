export async function getPoke() {
  const POKE = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const rawData = await fetch(POKE);
  const json = await rawData.json();

  const { name, height, abilities, id,moves } = json;
  // crea la imagen
  const img = json.sprites.other["official-artwork"].front_default;
  return {
    name,
    height,
    abilities,
    img,
    moves
  };
}

