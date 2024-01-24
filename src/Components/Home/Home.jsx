import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Pokemon from "../Pokemon/Pokemon";
import Order from "../Order/Order";
import { getPokemons, getTypes } from "../../redux/actions";
import style from "./Home.module.scss";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const pokemons = useSelector((state) => state.filteredPokemons);
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const itemsByPage = useSelector((state) => state.itemsByPage);
  const totalPokemons = useSelector((state) => state.totalPokemons);

  let start = (currentPage - 1) * itemsByPage;
  let end = start + itemsByPage;
  if (end > totalPokemons) end = totalPokemons;
  if (start < 0) start = 0;

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getPokemons());
      dispatch(getTypes());
    }
  }, []);

  return (
    <div className={style.container}>
      <div className={style.title_container}>
        <span className={style.title}>POKEMON APP</span>
      </div>
      <div>
        <Order />
      </div>
      <div className={style.characters}>
        {pokemons
          .map((pokemon) => {
            return (
              <Link
                className={style.link}
                to={`/detail/${pokemon.id}`}
                key={pokemon.id}
              >
                <Pokemon
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  image2={pokemon.image2}
                  attack={pokemon.attack}
                  types={pokemon.types}
                  key={pokemon.id}
                />
              </Link>
            );
          })
          .slice(start, end)}
        <div className={style.pagination}>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Home;
