import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

//Para hacer peticiones http se llama thunks
export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    //Cambia el estado a true
    dispatch(startLoadingPokemons());

    //Realizar peticion http con fetch
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await resp.json();
    // dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));

    //Realizar peticion con axios
    const { data } = await pokemonApi.get(
      `pokemon?limit=10&offset=${page * 10}`
    );
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
