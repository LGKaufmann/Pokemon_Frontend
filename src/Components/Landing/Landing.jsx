import style from "./Landing.module.scss";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.container2}>
        <img
          className={style.pokemon_image}
          src="../assets/pokemon.png"
          alt="pokemon"
          width="720px"
          height="300px"
        />
      </div>
      <div className={style.container3}>
        <p className={style.parrafo}>Descubre todos tus pokemons favoritos!</p>
        <img
          src="../assets/pikachu.gif"
          alt="pikachu"
          width="320px"
          height="220px"
        />
      </div>
      <Link to="/home" className={style.link}>
        <span className={style.span}>Ingresar</span>
      </Link>
      <div className={style.container4}>
        <span>Todos los derechos reservados Lautaro Kaufmann.</span>
      </div>
    </div>
  );
};

export default Landing;
