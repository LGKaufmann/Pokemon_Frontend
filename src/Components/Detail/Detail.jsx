import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById, resetSearchPokemon } from "../../redux/actions";
import Pokemon from "../Pokemon/Pokemon";
import style from "./Detail.module.scss";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getPokemonById(id));
    if (loading) {
      dispatch(resetSearchPokemon());
    }
  }, [id]);
  return (
    <div className={style.containerprin}>
      {pokemonDetail.name ? (
        <div className={style.container}>
          <div className={style.details_container_title}>
            <h1 className={style.details_title}>POKÉMON DETAILS</h1>
          </div>
          <div className={style.container_details}>
            <div className={style.details_stats}>
              <div className={style.details_info_types}>
                <span className={style.stats_title}>Measures</span>
                <h5 className={style.stats_item}>
                  Height: {pokemonDetail.height}
                </h5>
                <h5 className={style.stats_item}>
                  Weight: {pokemonDetail.weight}
                </h5>
              </div>
              <div className={style.container_stats}>
                <span className={style.stats_title}>Stats</span>
                <div>
                  <h5 className={style.stats_item}>HP: {pokemonDetail.hp}</h5>
                </div>
                <div>
                  <h5 className={style.stats_item}>
                    Attack: {pokemonDetail.attack}
                  </h5>
                </div>
                <div>
                  <h5 className={style.stats_item}>
                    Defense: {pokemonDetail.defense}
                  </h5>
                </div>
                <div>
                  <h5 className={style.stats_item}>
                    Speed: {pokemonDetail.speed}
                  </h5>
                </div>
              </div>
            </div>
            <div className={style.details_info_prin}>
              <span className={style.title}>POKEMON</span>
              <div className={style.details_info}>
                <Pokemon
                  id={pokemonDetail.id}
                  name={pokemonDetail.name}
                  image={pokemonDetail.image}
                  image2={pokemonDetail.image2}
                  attack={pokemonDetail.attack}
                  types={pokemonDetail.types}
                  key={pokemonDetail.id}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // verificacion de que el pokemon este cargado para mostrarlo
        <>
          <div>
            <div className={style.container_loading}>
              <h1>Loading...</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
