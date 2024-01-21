import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortName } from "../../redux/actions";
import { ASCENDENT, DESCENDENT } from "../../redux/action-types";
import style from "./OrderByName.module.scss";

const OrderByName = () => {
  let sort = useSelector((state) => state.sortAlfabetico);
  const dispatch = useDispatch();

  const onClick = (e) => {
    let valor = e.target.value;
    dispatch(sortName(valor));
  };
  return (
    <div className={style.order_container}>
      <div className={style.orderbar_item_title}>
        <h3>By Name</h3>
      </div>
      <button
        className={sort[0] ? style.button_order_selected : style.button_order}
        value={ASCENDENT}
        onClick={onClick}
      >
        A-Z
      </button>
      <button
        className={sort[1] ? style.button_order_selected : style.button_order}
        value={DESCENDENT}
        onClick={onClick}
      >
        Z-A
      </button>
    </div>
  );
};

export default OrderByName;
