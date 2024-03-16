import { IPokemonType } from "../types/pokemonTypes";

const BASE_URL = "http://localhost:3000";

export async function fetchPokemonList(): Promise<IPokemonType[]> {
  const response = await fetch(`${BASE_URL}/pokemon`);
  return await response.json();
}

export async function fetchPokemon(id: number): Promise<IPokemonType> {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  return await response.json();
}
