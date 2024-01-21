import { useDispatch, useSelector } from "react-redux";
import { filterByPokemon, filterByType } from "../../redux/actions";
import {
  ALL_POKEMONS,
  API_POKEMONS,
  DB_POKEMONS,
} from "../../redux/action-types";
import style from "./Filters.module.scss";

const Filters = () => {
  const types = useSelector((state) => state.types);
  const filterTypes = useSelector((state) => state.filterTypes);
  const filterPokemons = useSelector((state) => state.filterPokemons);
  const dispatch = useDispatch();

  const onChangeTypes = (e) => {
    dispatch(filterByType(e.target.value));
  };

  const onChangePokemons = (e) => {
    dispatch(filterByPokemon(e.target.value));
  };

  return (
    <div className={style.filter_container}>
      <div className={style.filter_item_title}>
        <h3>FILTER</h3>
      </div>

      <div>
        <select
          className={style.filter_select}
          value={filterTypes}
          onChange={onChangeTypes}
        >
          <option value="ALL_TYPES">All Types</option>
          {types.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          className={style.filter_select}
          value={filterPokemons}
          onChange={onChangePokemons}
        >
          <option value={ALL_POKEMONS}>All Pokemons</option>
          <option value={API_POKEMONS}>API Pokemons</option>
          <option value={DB_POKEMONS}>DB Pokemons</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
