import axios from "axios";
import {
  BOTTOMPAGE,
  CREATE_POKEMON,
  FILTER_POKEMON,
  FILTER_TYPE,
  FINDPOKEMONS,
  GETPOKEMONDETAILS,
  GETPOKEMONS,
  GETYPES,
  MODIFYPAGE,
  RESET_FILTER_ORDER,
  RESET_SEARCH_POKEMON,
  SORT_ATTACK,
  SORT_NAME,
  TOPAGE,
} from "./action-types";

export function getPokemons() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/pokemons");

      return dispatch({
        type: GETPOKEMONS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPokemonById(id) {
  return async function (dispatch) {
    try {
      const pokemonDetails = await axios.get(`/pokemons/${id}`);
      return dispatch({
        type: GETPOKEMONDETAILS,
        payload: pokemonDetails.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getTypes() {
  return function (dispatch) {
    axios
      .get("/types")
      .then((response) => {
        // ordenamiento alfabetico de los types
        response.data.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        }); //
        dispatch({
          type: GETYPES,
          payload: response.data, // recibe un arreglo de pokemons
        });
      }) // cacth generar un dispatch un error
      .catch((error) => {
        console.log("Error coneccion BACK");
      });
  };
}

export function createPokemon(newPokemon) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/pokemons", newPokemon);
      alert("Pokemon creado correctamente!");
      return dispatch({
        type: CREATE_POKEMON,
        payload: data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}

export function searchPokemon(name) {
  return async function (dispatch) {
    try {
      const pokemonSearch = await axios.get(`/pokemons?name=${name}`);
      return dispatch({
        type: FINDPOKEMONS,
        payload: pokemonSearch.data,
      });
    } catch ({ response }) {
      alert(response.data.message);
    }
  };
}

export function resetSearchPokemon() {
  return {
    type: RESET_SEARCH_POKEMON,
    payload: false,
  };
}

// order by NAME
export function sortName(order) {
  return {
    type: SORT_NAME,
    payload: order,
  };
}

// order by ATTACK
export function sortAttack(order) {
  return {
    type: SORT_ATTACK,
    payload: order,
  };
}

// reset Order Filter
export function resetFilterOrder() {
  return {
    type: RESET_FILTER_ORDER,
    payload: null,
  };
}

// Filters
export function filterByType(type) {
  return {
    type: FILTER_TYPE,
    payload: type,
  };
}

export function filterByPokemon(pokemonType) {
  return {
    type: FILTER_POKEMON,
    payload: pokemonType,
  };
}

// Pagination

export function modifyPage(value) {
  return {
    type: MODIFYPAGE,
    payload: value,
  };
}

export function topPage() {
  return {
    type: TOPAGE,
  };
}
export function bottomPage() {
  return {
    type: BOTTOMPAGE,
  };
}
