import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetSearchPokemon, searchPokemon } from "../../redux/actions";
import style from "./SearchBar.module.scss";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemonFound = useSelector((state) => state.pokemonFound);
  const findPokemon = useSelector((state) => state.searchPokemon);

  useEffect(() => {
    if (findPokemon) {
      dispatch(resetSearchPokemon());
      navigate(`/detail/${pokemonFound.id}`);
    }
  }, [pokemonFound]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      dispatch(searchPokemon(search.toLocaleLowerCase()));
      setSearch("");
    }
  };
  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <div className={style.search_bar_conteiner}>
      <div>
        {
          <div className={style.search_bar_subconteiner}>
            <form className={style.form_search_bar} onSubmit={onSubmit}>
              <input
                className={style.searchbar_input_text}
                type="text"
                value={search}
                onChange={onChange}
                placeholder="pokemon to search..."
              />
              <button className={style.searchbar_input_submit} type="submit">
                🔍
              </button>
            </form>
          </div>
        }
      </div>
    </div>
  );
};

export default SearchBar;
