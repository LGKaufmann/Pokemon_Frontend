import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import raichu from "../../../assets/raichu.gif";
import style from "./NavBar.module.scss";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className={style.nav_bar}>
      <div className={style.nav_conteiner}>
        <div className={style.nav_menu_izquierda}>
          <Link to="/">
            <img src={logo} className={style.nav_bar_logo} alt="Pokemon App" />
          </Link>
          <div className={style.menu}>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.nav_menu_derecha}>
          <div className={style.searchbar}>
            <SearchBar />
          </div>
          <img src={raichu} className={style.raichu} alt="Raichu" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
