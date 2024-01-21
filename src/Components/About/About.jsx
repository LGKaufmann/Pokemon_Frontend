import React from "react";
import style from "./About.module.scss";
import logo_react from "../../../assets/tecnologias/react.png";
import logo_redux from "../../../assets/tecnologias/redux.png";
import logo_express from "../../../assets/tecnologias/express.png";
import logo_sequelize from "../../../assets/tecnologias/sequelize.png";
import logo_postgres from "../../../assets/tecnologias/postgres.png";
import imagen from "../../../assets/yo.jpg";

const About = () => {
  return (
    <div>
      <div className={style.container_about}>
        <div className={style.conteiner_title}>
          <p className={style.title}>APP POKEMON</p>
        </div>
        <div className={style.conteiner}>
          <p className={style.parrafo}>
            Proyecto Individual de Pokémon, consiste en una Single Page
            Application (SPA). Los datos se extraen de la API de la PokeApi.
            Para el desarrollo de la app utlicé las siguientes tecnologias:
          </p>
          <p className={style.parrafo}>
            JavaScript - React - Redux - HTML - CSS -<br />
            Node.js - Express.js - Sequelize - PostgreSQL
          </p>
          <p className={style.parrafo}>
            Las caracteristicas del proyecto son las siguientes:
            <br />
            - Busca pokémon por nombre.
            <br />
            - Filtrar por tipos y por origen de la información.
            <br />
            - Cada Card en la página de inicio muestra un Pokémon y al hacer
            clic en la misma puedes ver los detalles.
            <br />
            - Ordenar alfabéticamente y por ataque.
            <br />
            - Crear un nuevo Pokémon llenando el formulario.
            <br />
            <br />
            <br />
          </p>
        </div>
        <div className={style.conteiner_tecnologias}>
          <img
            className={style.image_tecnologias}
            src={logo_react}
            alt="react"
          />
          <img
            className={style.image_tecnologias}
            src={logo_redux}
            alt="redux"
          />
          <img
            className={style.image_tecnologias}
            src={logo_express}
            alt="express"
          />
          <img
            className={style.image_tecnologias}
            src={logo_sequelize}
            alt="sequelize"
          />
          <img
            className={style.image_tecnologias}
            src={logo_postgres}
            alt="postgres"
          />
        </div>
        <div>
          <div className={style.container_imagen}>
            <h1 className={style.title}>Fullstack Developer</h1>
            <p className={style.parrafo}>Lautaro Kaufmann, Argentina</p>
            <img
              className={style.developer}
              src={imagen}
              alt="yo"
              width="300px"
              height="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
