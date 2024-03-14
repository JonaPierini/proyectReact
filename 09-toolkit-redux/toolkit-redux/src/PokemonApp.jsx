import { useSelector, useDispatch } from "react-redux";
import { startLoadingPokemons } from "./store/slices/pokemon/pokemonSlice";
import { useEffect } from "react";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const data = useSelector((state) => state.pokemon);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div>
      <h1>Pokemon</h1>
      {data.isLoading === true ? <span>Cargando...</span> : <span>Listo</span>}
      <ul>
        {data.pokemons.map((elem) => (
          <li key={elem.name}>{elem.name}</li>
        ))}
      </ul>
      <button
        disabled={data.isLoading == true}
        onClick={() => dispatch(getPokemons(data.page))}
      >
        Next Page
      </button>
    </div>
  );
};
