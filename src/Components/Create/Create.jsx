import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validation from "../../utils/validation";
import Pokemon from "../Pokemon/Pokemon";
import { createPokemon } from "../../redux/actions";
import style from "./Create.module.scss";

const Create = () => {
  const dispatch = useDispatch();
  const MAX_TYPES = 2;
  const options = useSelector((state) => state.types);
  const [data, setData] = useState({
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    image: "",
    image2: "",
    types: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    image2: "",
    height: "",
    weight: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    types: "",
  });

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    setData({ ...data, [property]: value });
    setErrors(validation({ ...data, [property]: value }));
  };

  function onChangeTypes(e) {
    let value = e.target.value;

    // maximo de types 2
    if (value === "0") return;

    if (data.types.filter((type) => type.name === value).length === 0) {
      let newType = { name: value };
      setData({
        ...data,
        types: [...data.types, newType],
      });

      setErrors(
        validation({
          ...data,
          types: [...data.types, newType],
        })
      );

      if (data.types.length === MAX_TYPES - 1) {
        e.target.disabled = true;
      }
    }
    value = "0";
  }

  function onClickDelete(e) {
    const value = e.target.value;
    let newTypes = data.types.filter((type) => type.name !== value);
    setData({
      ...data,
      types: newTypes,
    });

    if (data.types.length < MAX_TYPES + 1) {
      document.getElementById("typesSelect").disabled = false;
    }

    setErrors(
      validation({
        ...data,
        types: newTypes,
      })
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(createPokemon(data));
    } else {
      setErrors({
        ...errors,
      });
    }
  };

  return (
    <div>
      <div className={style.containerPrincipal}>
        <div className={style.container}>
          {/*NAME*/}
          <div className={style.itemContainer}>
            <div className={style.inputGroup}>
              <label className={style.label}>Name:</label>
              <input
                className={style.input}
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="name of the pokemon..."
              />
            </div>
            <div className={style.errors}>
              {errors.name && <p className={style.danger}>{errors.name}</p>}
            </div>
          </div>

          {/*IMAGE*/}
          <div className={style.itemContainer}>
            <div className={style.inputGroup}>
              <label className={style.label}>Image:</label>
              <input
                className={style.input}
                type="text"
                name="image"
                value={data.image}
                onChange={handleChange}
                placeholder="Insert URL image PNG"
              />
            </div>
            <div className={style.errors}>
              {errors.image && <p className={style.danger}>{errors.image}</p>}
            </div>
          </div>
          <div className={style.itemContainer}>
            <div className={style.inputGroup}>
              <label className={style.label}>Image 2:</label>
              <input
                className={style.input}
                type="text"
                name="image2"
                value={data.image2}
                onChange={handleChange}
                placeholder="Insert URL image PNG"
              />
            </div>
            <div className={style.errors}>
              {errors.image2 && <p className={style.danger}>{errors.image2}</p>}
            </div>
          </div>

          {/*heigth and weigth*/}
          <div className={style.itemContainer}>
            <div className={style.inputGroup}>
              <label className={style.label}>Height:</label>
              <input
                className={style.inputShort}
                type="text"
                name="height"
                value={data.height}
                onChange={handleChange}
                placeholder="Height"
              />
            </div>
            <div>
              <p className={style.danger}>{errors.height && errors.height}</p>
            </div>
            <div className={style.inputGroup}>
              <label className={style.label}>Weight:</label>
              <input
                className={style.inputShort}
                type="text"
                name="weight"
                value={data.weight}
                onChange={handleChange}
                placeholder="Weight"
              />
            </div>
            <div className={style.errors}>
              {errors.weight && <p className={style.danger}>{errors.weight}</p>}
            </div>
          </div>

          {/*TYPES*/}
          <div className={style.itemContainer}>
            <div className={style.inputGroup}>
              <label className={style.label}>Types:</label>

              <select
                className={style.types_select}
                defaultValue="0"
                id="typesSelect"
                onChange={onChangeTypes}
                name="types"
              >
                <option value="0">Select Types</option>
                {options.map((type, index) => (
                  <option key={index} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={style.inputGroupTypes}>
              {data.types.map((type, index) => (
                <div key={index}>
                  <span>{type.name}</span>
                  <button
                    value={type.name}
                    className={style.button_delete}
                    onClick={onClickDelete}
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className={style.containerErrorTypes}>
            <div className={style.typesNote}>2 types maximum</div>
            <div className={style.typesError}>{errors.types}</div>
          </div>

          {/* RANGE INPUT */}
          <div className={style.itemContainerRange}>
            <form className={style.rangeForm}>
              <div className={style.rangeGroup}>
                <span className={style.labelRange}>Hp:</span>
                <input
                  type="range"
                  defaultValue={data.hp}
                  name="hp"
                  onChange={handleChange}
                  min={0}
                  max={999}
                  value={data.hp}
                />
                <span className={style.labelRangeNumber}>{data.hp}</span>
              </div>
              <div className={style.rangeGroup}>
                <span className={style.labelRange}>Attack:</span>
                <input
                  type="range"
                  defaultValue={data.attack}
                  name="attack"
                  onChange={handleChange}
                  min={0}
                  max={999}
                  value={data.attack}
                />
                <span className={style.labelRangeNumber}>{data.attack}</span>
              </div>
              <div>
                <span className={style.labelRange}>Defense:</span>
                <input
                  type="range"
                  defaultValue={data.defense}
                  name="defense"
                  onChange={handleChange}
                  min={0}
                  max={999}
                  value={data.defense}
                />
                <span className={style.labelRangeNumber}>{data.defense}</span>
              </div>
              <div>
                <span className={style.labelRange}>Speed:</span>
                <input
                  type="range"
                  defaultValue={data.speed}
                  name="speed"
                  onChange={handleChange}
                  min={0}
                  max={999}
                  value={data.speed}
                />
                <span className={style.labelRangeNumber}>{data.speed}</span>
              </div>
            </form>
          </div>
          <div>
            {
              // Errores de formulario
              <div className={style.text_error_form}>
                {Object.keys(errors).length !== 0 &&
                  "You must complete the form correctly before sending."}
              </div>
            }
          </div>

          <div className={style.itemContainer_create}>
            <input
              className={style.button_create}
              onClick={handleSubmit}
              type="submit"
              name="submit"
              value="CREATE"
              id="submitCreate"
            />
          </div>
        </div>
        <div>
          <div className={style.containerPreview}>
            <span className={style.title}>CARD PREVIEW</span>
            <div className={style.containerPreview_Card}>
              <Pokemon
                name={data.name}
                image={data.image}
                image2={data.image2}
                height={data.height}
                weight={data.weight}
                hp={data.hp}
                attack={data.attack}
                defense={data.defense}
                speed={data.speed}
                types={data.types}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
