import {
  ALL_TYPES,
  API_POKEMONS,
  ASCENDENT,
  BOTTOMPAGE,
  CREATE_POKEMON,
  DB_POKEMONS,
  DESCENDENT,
  ERROR_NAME_POKEMON,
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
const initialState = {
  pokemons: [],
  filteredPokemons: [],
  types: [],
  pokemonFound: {},
  createdPokemon: false,
  error_msg: "",
  pokemonDetail: {},
  searchPokemon: false,
  loading: false,

  // Order and Filter
  sortNone: true,
  filterTypes: false,
  filterPokemons: false,
  sortAlfabetico: [false, false],
  sortAttack: [false, false],

  // -------------------Pagination---------------------
  currentPage: 1,
  totalPokemons: 0,
  itemsByPage: 12,
};

function rootReducer(state = initialState, action) {
  function filterAll(cType, cPokemon) {
    let backups = [...state.pokemons];

    // filtro por type de Pokemon
    if (cType && cType !== ALL_TYPES) {
      backups = backups.filter((pokemon) => {
        const extractTypes = pokemon.types.map((type) => type.name);
        return extractTypes.includes(cType);
      });
    }

    // filtro Pokemon que viene desde la API
    if (cPokemon === API_POKEMONS) {
      backups = backups.filter((pokemon) => !isNaN(pokemon.id)); // valores numericos
    }

    // filtro Pokemon que viene desde la DB
    if (cPokemon === DB_POKEMONS) {
      backups = backups.filter((pokemon) => isNaN(pokemon.id)); // valores alfanumericos
    }

    return backups;
  }

  switch (action.type) {
    case GETPOKEMONS:
      return {
        ...state,
        pokemons: action.payload, // recibe un arreglo con todos los pokemons
        filteredPokemons: action.payload,
        totalPokemons: action.payload.length,
      };

    case GETYPES:
      return {
        ...state,
        types: action.payload, // recibe un arreglo con types
      };

    case CREATE_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
        filteredPokemons: [...state.filteredPokemons, action.payload],
        totalPokemons: state.pokemons.length + 1,
        createdPokemon: true,
      };
    case GETPOKEMONDETAILS:
      return {
        ...state,
        pokemonDetail: action.payload,
        loading: true,
      };

    case FINDPOKEMONS:
      return {
        ...state,
        pokemonFound: action.payload,
        searchPokemon: true,
      };

    case RESET_SEARCH_POKEMON:
      return {
        ...state,
        pokemonFound: {},
        pokemonDetail: {},
        searchPokemon: action.payload,
        loading: false,
      };

    case RESET_FILTER_ORDER:
      // reset
      return {
        ...state,
        filteredPokemons: state.pokemons,
        sortNone: true,
        filterTypes: false,
        filterPokemons: false,
        sortAlfabetico: [false, false],
        sortAttack: [false, false],
        totalPokemons: state.pokemons.length,
        currentPage: 1,
        searchPokemon: false,
      };

    case ERROR_NAME_POKEMON: {
      return {
        ...state,
        createdPokemon: action.payload,
      };
    }

    case SORT_NAME:
      let orderPokemons = [...state.filteredPokemons];
      orderPokemons.sort((a, b) => {
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return action.payload === ASCENDENT ? -1 : 1;
        }
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return action.payload === DESCENDENT ? -1 : 1;
        }
        return 0;
      });

      return {
        ...state,
        filteredPokemons: orderPokemons,
        sortAlfabetico: [
          action.payload === ASCENDENT,
          action.payload === DESCENDENT,
        ],
        sortAttack: [false, false],
        sortNone: false,
      };

    case SORT_ATTACK:
      let orderAttack = [...state.filteredPokemons];
      orderAttack.sort((a, b) => {
        if (a.attack < b.attack) {
          return action.payload === ASCENDENT ? -1 : 1;
        }
        if (a.attack > b.attack) {
          return action.payload === DESCENDENT ? -1 : 1;
        }
        return 0;
      });

      return {
        ...state,
        filteredPokemons: orderAttack,
        sortAttack: [
          action.payload === ASCENDENT,
          action.payload === DESCENDENT,
        ],
        sortAlfabetico: [false, false],
        sortNone: false,
      };

    case FILTER_TYPE:
      let backups = filterAll(action.payload, state.filterPokemons);
      return {
        ...state,
        filteredPokemons: backups,
        filterTypes: action.payload,
        totalPokemons: backups.length,
        currentPage: 1,
      };

    case FILTER_POKEMON:
      let back = filterAll(state.filterTypes, action.payload);
      return {
        ...state,
        filteredPokemons: back,
        filterPokemons: action.payload,
        totalPokemons: back.length,
        currentPage: 1,
      };

    case MODIFYPAGE:
      let value = action.payload;
      if (state.currentPage + value < 1) {
        value = 0;
      }
      if (
        state.currentPage + value >
        Math.ceil(state.totalPokemons / state.itemsByPage)
      ) {
        value = 0;
      }

      return {
        ...state,
        currentPage: state.currentPage + value,
      };

    case BOTTOMPAGE:
      return {
        ...state,
        currentPage: 1,
      };

    case TOPAGE:
      return {
        ...state,
        currentPage:
          state.totalPokemons === 0
            ? 1
            : Math.ceil(state.totalPokemons / state.itemsByPage),
      };
    default:
      return state;
  }
}

export default rootReducer;
