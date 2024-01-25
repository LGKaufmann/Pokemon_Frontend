import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Pokemon from "../Pokemon/Pokemon";
import Order from "../Order/Order";
import pokeball from "../../../public/assets/pokeball.png";
import { TypeAnimation } from "react-type-animation";
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
      <div className={style.order}>
        <Order />
      </div>
      {pokemons.length !== 0 ? (
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
        </div>
      ) : (
        <div className={style.loading}>
          <img
            className={style.pokeball}
            src={pokeball}
            alt="pokeball"
            width="300px"
            height="300px"
          />
          <TypeAnimation
            className={style.animacion}
            sequence={["Loading pokemons", 1000, "please wait.", 1000]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </div>
      )}
      <div className={style.pagination}>
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
